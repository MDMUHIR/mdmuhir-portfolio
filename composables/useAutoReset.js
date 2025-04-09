import { onMounted, onUnmounted } from "vue";
import { db } from "../../my-todo/src/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export function useAutoReset() {
  let midnightTimer = null;

  const calculateTimeUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - now.getTime();
  };

  const resetCompletedTodos = async () => {
    try {
      const todosCollection = collection(db, "todos");
      const completedQuery = query(
        todosCollection,
        where("completed", "==", true)
      );

      const completedTodos = await getDocs(completedQuery);
      const deletePromises = completedTodos.docs.map((doc) =>
        deleteDoc(doc.ref)
      );
      await Promise.all(deletePromises);

      // Schedule next reset
      scheduleReset();
    } catch (error) {
      console.error("Error resetting todos:", error);
    }
  };

  const scheduleReset = () => {
    const timeUntilMidnight = calculateTimeUntilMidnight();
    midnightTimer = setTimeout(resetCompletedTodos, timeUntilMidnight);
  };

  onMounted(() => {
    scheduleReset();
  });

  onUnmounted(() => {
    if (midnightTimer) {
      clearTimeout(midnightTimer);
    }
  });

  return {
    resetCompletedTodos,
  };
}
