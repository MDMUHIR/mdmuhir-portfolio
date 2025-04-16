import { db } from "~/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
export const useToolsCL = () => {
  const currentLearningTools = ref([]); // list of tools
  const currentLearningTool = ref(null); // single selected tool
  const currentLearningToolId = ref(""); // selected tool ID
  const error = ref(null); // error tracking

  // Fetch Curently learning in real-time
};

onMounted(() => {
  const toolsRef = collection(db, "currentLearningTools");
});
