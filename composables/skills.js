import { ref, onMounted } from "vue";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

export const useSkills = () => {
  const skills = ref([]);
  const skill = ref(null);
  const skillId = ref("");
  const error = ref(null);

  // Fetch skills in real-time
  onMounted(() => {
    const skillsRef = collection(db, "skills");
    const unsubscribe = onSnapshot(skillsRef, (snapshot) => {
      skills.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    return () => unsubscribe(); // Cleanup on unmount
  });

  // Add new skill
  const addSkill = async (skillData) => {
    try {
      error.value = null;
      await addDoc(collection(db, "skills"), skillData);
    } catch (e) {
      error.value = "Could not add the skill";
      console.error("Error adding skill:", e);
    }
  };

  // Remove skill
  const removeSkill = async (id) => {
    try {
      error.value = null;
      await deleteDoc(doc(db, "skills", id));
    } catch (e) {
      error.value = "Could not delete the skill";
      console.error("Error removing skill:", e);
    }
  };

  // Update skill
  const updateSkill = async (id, data) => {
    try {
      error.value = null;
      const skillRef = doc(db, "skills", id);
      await updateDoc(skillRef, data);
    } catch (e) {
      error.value = "Could not update the skill";
      console.error("Error updating skill:", e);
    }
  };

  // Get single skill by ID
  const getSkillById = async (id) => {
    try {
      error.value = null;
      const skillRef = doc(db, "skills", id);
      const docSnap = await getDoc(skillRef);

      if (docSnap.exists()) {
        skill.value = { id: docSnap.id, ...docSnap.data() };
      } else {
        skill.value = null;
        error.value = "Skill not found";
      }
    } catch (e) {
      skill.value = null;
      error.value = "Could not fetch the skill";
      console.error("Error getting skill:", e);
    }
  };

  return {
    skills,
    skill,
    skillId,
    error,
    addSkill,
    removeSkill,
    updateSkill,
    getSkillById,
  };
};
