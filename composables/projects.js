import { ref, computed, watch, onMounted } from "vue";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export const useProjects = () => {
  const projects = ref([]);
  const project = ref("");
  const projectId = ref("");
  const error = ref(null);

  // Fetch projects in real-time
  onMounted(() => {
    const projectsRef = collection(db, "projects");
    const unsubscribe = onSnapshot(projectsRef, (snapshot) => {
      projects.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  });

  // Add new project
  const addProject = async (projectData) => {
    try {
      error.value = null;
      await addDoc(collection(db, "projects"), projectData);
    } catch (e) {
      error.value = "Could not add the project";
      console.error("Error adding project:", e);
    }
  };

  // Remove project
  const removeProject = async (id) => {
    try {
      error.value = null;
      await deleteDoc(doc(db, "projects", id));
    } catch (e) {
      error.value = "Could not delete the project";
      console.error("Error removing project:", e);
    }
  };

  // Update project
  const updateProject = async (id, projectData) => {
    try {
      error.value = null;
      await updateDoc(doc(db, "projects", id), projectData);
    } catch (e) {
      error.value = "Could not update the project";
      console.error("Error updating project:", e);
    }
  };

  return {
    projects,
    project,
    projectId,
    error,
    addProject,
    removeProject,
    updateProject,
  };
};
