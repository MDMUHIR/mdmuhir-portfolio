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

export const useBlogs = () => {
  const blogs = ref([]);
  const blog = ref(null); // single blog data
  const blogId = ref("");
  const error = ref(null);

  // Fetch blogs in real-time
  onMounted(() => {
    const blogsRef = collection(db, "blogs");
    const unsubscribe = onSnapshot(blogsRef, (snapshot) => {
      blogs.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    return () => unsubscribe(); // Cleanup on unmount
  });

  // Add new blog
  const addBlog = async (blogData) => {
    try {
      error.value = null;
      await addDoc(collection(db, "blogs"), blogData);
    } catch (e) {
      error.value = "Could not add the blog post";
      console.error("Error adding blog:", e);
    }
  };

  // Remove blog
  const removeBlog = async (id) => {
    try {
      error.value = null;
      await deleteDoc(doc(db, "blogs", id));
    } catch (e) {
      error.value = "Could not delete the blog post";
      console.error("Error removing blog:", e);
    }
  };

  // Update blog
  const updateBlog = async (id, data) => {
    try {
      error.value = null;
      const blogRef = doc(db, "blogs", id);
      await updateDoc(blogRef, data);
    } catch (e) {
      error.value = "Could not update the blog post";
      console.error("Error updating blog:", e);
    }
  };

  // ✅ Get single blog by ID
  const getBlogById = async (id) => {
    try {
      error.value = null;
      const blogRef = doc(db, "blogs", id);
      const docSnap = await getDoc(blogRef);

      if (docSnap.exists()) {
        blog.value = { id: docSnap.id, ...docSnap.data() };
      } else {
        blog.value = null;
        error.value = "Blog post not found";
      }
    } catch (e) {
      blog.value = null;
      error.value = "Could not fetch the blog post";
      console.error("Error getting blog:", e);
    }
  };

  return {
    blogs,
    blog,
    blogId,
    error,
    addBlog,
    removeBlog,
    updateBlog,
    getBlogById, // <-- expose the new method
  };
};
