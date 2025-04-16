<script setup>
  definePageMeta({
    layout: "admin",
  });

  import { ref } from "vue";
  import { useBlogs } from "@/composables/blogs";

  const { blogs, addBlog, removeBlog } = useBlogs();
  const showModal = ref(false);

  const form = ref({
    title: "",
    summary: "",
    content: "",
    tagsInput: "",
    date: new Date().toISOString().split("T")[0],
  });

  const resetForm = () => {
    form.value = {
      title: "",
      summary: "",
      content: "",
      tagsInput: "",
      date: new Date().toISOString().split("T")[0],
    };
  };

  const submitBlog = async () => {
    const tagsArray = form.value.tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    await addBlog({
      title: form.value.title,
      summary: form.value.summary,
      content: form.value.content,
      tags: tagsArray,
      date: new Date(form.value.date).toISOString(),
      createdAt: new Date().toISOString(),
    });

    resetForm();
    showModal.value = false;
  };
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-gray-800">My Blog Posts</h1>
      <button
        @click="showModal = true"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Blog Post
      </button>
    </div>

    <!-- Blog Post List -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tags
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="blog in blogs" :key="blog.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">
                {{ blog.title }}
              </div>
              <div class="text-sm text-gray-500 truncate max-w-xs">
                {{ blog.summary }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                {{ new Date(blog.date).toLocaleDateString() }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="tag in blog.tags"
                  :key="tag"
                  class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  {{ tag }}
                </span>
              </div>
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
            >
              <button
                @click="removeBlog(blog.id)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr v-if="blogs.length === 0">
            <td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">
              No blog posts found
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add Blog Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-lg w-full max-w-2xl">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-4">Add New Blog Post</h2>
          <form @submit.prevent="submitBlog" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Title</label
              >
              <input
                v-model="form.title"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Date</label
              >
              <input
                v-model="form.date"
                type="date"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Summary</label
              >
              <textarea
                v-model="form.summary"
                required
                rows="2"
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Content</label
              >
              <textarea
                v-model="form.content"
                required
                rows="6"
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Tags (comma separated)</label
              >
              <input
                v-model="form.tagsInput"
                type="text"
                placeholder="vue, javascript, web development"
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div class="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                @click="showModal = false"
                class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Blog Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
