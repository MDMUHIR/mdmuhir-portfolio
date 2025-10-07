<script setup>
definePageMeta({
  layout: "admin",
});

import { ref, computed } from "vue";
import { useBlogs } from "@/composables/blogs";

const { blogs, addBlog, removeBlog } = useBlogs();
const showModal = ref(false);

// Blog form
const form = ref({
  title: "",
  summary: "",
  content: "",
  image: "",
  tagsInput: "",
  date: new Date().toISOString().split("T")[0],
});

// Reset form after submit
const resetForm = () => {
  form.value = {
    title: "",
    summary: "",
    content: "",
    image: "",
    tagsInput: "",
    date: new Date().toISOString().split("T")[0],
  };
};

// Add blog post
const submitBlog = async () => {
  const tagsArray = form.value.tagsInput
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await addBlog({
    title: form.value.title,
    summary: form.value.summary,
    content: form.value.content,
    image: form.value.image || "",
    tags: tagsArray,
    date: new Date(form.value.date).toISOString(),
    createdAt: new Date().toISOString(),
  });

  resetForm();
  showModal.value = false;
};

// Preview logic for image
const imagePreview = computed(() => form.value.image?.trim() || "");
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-white">📰 Blog Management</h1>
      <button
        @click="showModal = true"
        class="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 px-5 py-2.5 rounded-lg text-white font-medium shadow-lg transition-all duration-300"
      >
        ➕ Add Blog Post
      </button>
    </div>

    <!-- Blog Table -->
    <div
      class="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800"
    >
      <table class="min-w-full divide-y divide-gray-800">
        <thead class="bg-gray-800/60 backdrop-blur">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase"
            >
              Image
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase"
            >
              Title
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase"
            >
              Date
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase"
            >
              Tags
            </th>
            <th
              class="px-6 py-3 text-right text-xs font-semibold text-gray-300 uppercase"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800 text-gray-300">
          <tr
            v-for="blog in blogs"
            :key="blog.id"
            class="hover:bg-gray-800/70 transition-all duration-200"
          >
            <td class="px-6 py-3">
              <img
                v-if="blog.image"
                :src="blog.image"
                alt="Blog Image"
                class="w-16 h-16 object-cover rounded-md border border-gray-700"
              />
              <div
                v-else
                class="w-16 h-16 rounded-md bg-gray-700 flex items-center justify-center text-gray-500 text-xs"
              >
                No Image
              </div>
            </td>
            <td class="px-6 py-4">
              <div
                class="text-sm font-semibold text-white truncate max-w-[200px]"
              >
                {{ blog.title }}
              </div>
              <div class="text-xs text-gray-400 line-clamp-1">
                {{ blog.summary }}
              </div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-400">
              {{ new Date(blog.date).toLocaleDateString() }}
            </td>
            <td class="px-6 py-4 text-sm">
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="tag in blog.tags"
                  :key="tag"
                  class="px-2 py-0.5 rounded text-xs bg-red-600/20 text-red-400 border border-red-600/30"
                >
                  {{ tag }}
                </span>
              </div>
            </td>
            <td class="px-6 py-4 text-right">
              <button
                @click="removeBlog(blog.id)"
                class="text-red-500 hover:text-red-400 font-medium transition-colors"
              >
                🗑 Delete
              </button>
            </td>
          </tr>

          <tr v-if="blogs.length === 0">
            <td colspan="5" class="text-center py-8 text-gray-500">
              No blog posts found 💤
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add Blog Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
    >
      <div
        class="bg-gray-900 text-gray-200 rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-800"
      >
        <div
          class="p-6 border-b border-gray-800 flex justify-between items-center"
        >
          <h2 class="text-xl font-bold">📝 Add New Blog Post</h2>
          <button
            @click="showModal = false"
            class="text-gray-400 hover:text-gray-100 transition"
          >
            ✕
          </button>
        </div>

        <div class="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <form @submit.prevent="submitBlog" class="space-y-6">
            <!-- Title -->
            <div>
              <label class="block text-sm mb-1">Title</label>
              <input
                v-model="form.title"
                type="text"
                required
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <!-- Date -->
            <div>
              <label class="block text-sm mb-1">Date</label>
              <input
                v-model="form.date"
                type="date"
                required
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <!-- Summary -->
            <div>
              <label class="block text-sm mb-1">Summary</label>
              <textarea
                v-model="form.summary"
                rows="2"
                required
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <!-- Content -->
            <div>
              <label class="block text-sm mb-1">Content</label>
              <textarea
                v-model="form.content"
                rows="6"
                required
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <!-- Image URL + Preview -->
            <div>
              <label class="block text-sm mb-1">Image URL</label>
              <input
                v-model="form.image"
                type="text"
                placeholder="https://example.com/image.jpg"
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div
                v-if="imagePreview"
                class="mt-3 border border-gray-700 rounded-md overflow-hidden"
              >
                <img
                  :src="imagePreview"
                  alt="Preview"
                  class="w-full h-48 object-cover"
                />
              </div>
            </div>

            <!-- Tags -->
            <div>
              <label class="block text-sm mb-1">Tags (comma separated)</label>
              <input
                v-model="form.tagsInput"
                type="text"
                placeholder="vue, javascript, design"
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <!-- Buttons -->
            <div class="flex justify-end gap-3 pt-4">
              <button
                type="button"
                @click="showModal = false"
                class="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-md font-medium shadow-md"
              >
                💾 Save Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
