import { ref, onMounted, onUnmounted } from "vue";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

export const useProjects = () => {
  const projects = ref([]);
  const loading = ref(true);
  const error = ref(null);

  let unsubscribe = null;

  // 🔥 Fetch projects in real-time (ordered by newest first)
  onMounted(() => {
    try {
      const projectsRef = collection(db, "projects");
      const q = query(projectsRef, orderBy("createdAt", "desc"));

      unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          projects.value = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          loading.value = false;
        },
        (err) => {
          console.error("Error fetching projects:", err);
          error.value = "Failed to load projects.";
          loading.value = false;
        }
      );
    } catch (e) {
      console.error("Error initializing snapshot:", e);
      error.value = "Error initializing data stream.";
      loading.value = false;
    }
  });

  // 🧹 Cleanup listener on component unmount
  onUnmounted(() => {
    if (unsubscribe) unsubscribe();
  });

  // ➕ Add a new project
  const addProject = async (projectData) => {
    try {
      error.value = null;

      // Add timestamps and sanitize data
      const newProject = {
        title: projectData.title || "Untitled Project",
        description: projectData.description || "",
        technologies: projectData.technologies || [],
        demoUrl: projectData.demoUrl || "",
        githubUrl: projectData.githubUrl || "",
        imageUrl: projectData.imageUrl || "", // 🖼️ image field added
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "projects"), newProject);
    } catch (e) {
      console.error("Error adding project:", e);
      error.value = "Could not add the project.";
    }
  };

  // 🗑️ Delete a project
  const removeProject = async (id) => {
    try {
      error.value = null;
      await deleteDoc(doc(db, "projects", id));
    } catch (e) {
      console.error("Error removing project:", e);
      error.value = "Could not delete the project.";
    }
  };

  // ✏️ Update an existing project
  const updateProject = async (id, projectData) => {
    try {
      error.value = null;
      const projectRef = doc(db, "projects", id);

      const updatedData = {
        ...projectData,
        updatedAt: serverTimestamp(),
      };

      await updateDoc(projectRef, updatedData);
    } catch (e) {
      console.error("Error updating project:", e);
      error.value = "Could not update the project.";
    }
  };

  return {
    projects,
    loading,
    error,
    addProject,
    removeProject,
    updateProject,
  };
};
