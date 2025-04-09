import { ref, onMounted } from "vue";
import { db } from "../../my-todo/src/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export function useStats() {
  const weeklyStats = ref({
    completed: 0,
    incomplete: 0,
  });
  const monthlyStats = ref({
    completed: 0,
    incomplete: 0,
  });

  // Function to calculate the start of the week
  const getStartOfWeek = () => {
    const now = new Date();
    const firstDay = new Date(now.setDate(now.getDate() - now.getDay()));
    firstDay.setHours(0, 0, 0, 0);
    return firstDay;
  };

  // Function to calculate the start of the month
  const getStartOfMonth = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  };

  // Function to update statistics
  const updateStats = async () => {
    try {
      const todosCollection = collection(db, "todos");
      const startOfWeek = getStartOfWeek();
      const startOfMonth = getStartOfMonth();

      // Weekly stats
      const weeklyCompletedQuery = query(
        todosCollection,
        where("createdAt", ">=", startOfWeek.getTime()),
        where("completed", "==", true)
      );
      const weeklyIncompleteQuery = query(
        todosCollection,
        where("createdAt", ">=", startOfWeek.getTime()),
        where("completed", "==", false)
      );

      // Monthly stats
      const monthlyCompletedQuery = query(
        todosCollection,
        where("createdAt", ">=", startOfMonth.getTime()),
        where("completed", "==", true)
      );
      const monthlyIncompleteQuery = query(
        todosCollection,
        where("createdAt", ">=", startOfMonth.getTime()),
        where("completed", "==", false)
      );

      const [
        weeklyCompleted,
        weeklyIncomplete,
        monthlyCompleted,
        monthlyIncomplete,
      ] = await Promise.all([
        getDocs(weeklyCompletedQuery),
        getDocs(weeklyIncompleteQuery),
        getDocs(monthlyCompletedQuery),
        getDocs(monthlyIncompleteQuery),
      ]);

      weeklyStats.value = {
        completed: weeklyCompleted.size,
        incomplete: weeklyIncomplete.size,
      };

      monthlyStats.value = {
        completed: monthlyCompleted.size,
        incomplete: monthlyIncomplete.size,
      };
    } catch (error) {
      console.error("Error updating stats:", error);
    }
  };

  // Function to reset daily todos
  const resetDailyTodos = async () => {
    try {
      const todosCollection = collection(db, "todos");
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const todosQuery = query(
        todosCollection,
        where("createdAt", "<", today.getTime()),
        where("completed", "==", false)
      );

      const incompleteTodos = await getDocs(todosQuery);
      const statsCollection = collection(db, "stats");

      // Record stats before reset
      await addDoc(statsCollection, {
        date: today.getTime(),
        completed: weeklyStats.value.completed,
        incomplete: incompleteTodos.size,
        type: "daily",
      });

      // Update stats after recording
      await updateStats();
    } catch (error) {
      console.error("Error resetting daily todos:", error);
    }
  };

  // Initialize stats on component mount
  onMounted(() => {
    updateStats();

    // Set up daily reset at midnight
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    setTimeout(() => {
      resetDailyTodos();
      // Set up recurring daily reset
      setInterval(resetDailyTodos, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
  });

  return {
    weeklyStats,
    monthlyStats,
    updateStats,
  };
}
