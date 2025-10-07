<script setup>
definePageMeta({
  layout: "admin",
});

import { ref } from "vue";
import { useProjects } from "@/composables/projects";

const { projects, addProject, removeProject, loading } = useProjects();
const showModal = ref(false);

const form = ref({
  title: "",
  description: "",
  technologiesInput: "",
  imageUrl: "",
  demoUrl: "",
  githubUrl: "",
});

// 🧹 Reset form
const resetForm = () => {
  form.value = {
    title: "",
    description: "",
    technologiesInput: "",
    imageUrl: "",
    demoUrl: "",
    githubUrl: "",
  };
};

// 🧾 Submit form
const submitProject = async () => {
  const techArray = form.value.technologiesInput
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const projectData = {
    title: form.value.title,
    description: form.value.description,
    technologies: techArray,
    imageUrl: form.value.imageUrl || "",
    demoUrl: form.value.demoUrl || "",
    githubUrl: form.value.githubUrl || "",
  };

  await addProject(projectData);
  resetForm();
  showModal.value = false;
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12 text-white">
    <!-- Header -->
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold">My Projects</h1>
      <button
        @click="showModal = true"
        class="bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 rounded-lg font-medium hover:from-red-700 hover:to-red-900 transition-all"
      >
        + Add Project
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-gray-400 text-center py-10">
      Loading projects...
    </div>

    <!-- Project Grid -->
    <div v-else class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
      >
        <!-- Image -->
        <div class="relative">
          <img
            v-if="project.imageUrl"
            :src="project.imageUrl"
            alt="Project image"
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            v-else
            class="h-48 w-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex flex-col flex-grow">
          <h2
            class="text-xl font-semibold mb-2 text-gray-100 group-hover:text-red-400 transition-colors"
          >
            {{ project.title }}
          </h2>
          <p class="text-gray-400 mb-4 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="mb-4">
            <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">
              Technologies
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-gray-700 text-red-300 text-xs px-3 py-1 rounded-full font-medium hover:bg-gray-600 transition-colors"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="flex gap-3 mt-auto">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              class="text-sm bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-4 py-2.5 rounded-lg font-medium flex-grow text-center transition-all flex items-center justify-center gap-2"
            >
              Demo
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              class="text-sm border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2.5 rounded-lg font-medium flex-grow text-center transition-all flex items-center justify-center gap-2"
            >
              Code
            </a>
          </div>

          <button
            @click="removeProject(project.id)"
            class="mt-5 text-sm text-red-400 hover:text-red-500 self-start"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && projects.length === 0" class="text-center py-20">
      <h3 class="text-2xl font-medium text-gray-300 mb-2">No projects yet</h3>
      <p class="text-gray-500">
        Start by adding your first project using the button above.
      </p>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-900 text-white rounded-2xl p-8 w-full max-w-md shadow-xl border border-gray-700"
      >
        <h2 class="text-xl font-semibold mb-6 text-center">Add New Project</h2>

        <form @submit.prevent="submitProject" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-400">Title</label>
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400"
              >Description</label
            >
            <textarea
              v-model="form.description"
              required
              class="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400"
              >Technologies (comma-separated)</label
            >
            <input
              v-model="form.technologiesInput"
              type="text"
              required
              class="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400"
              >Image URL</label
            >
            <input
              v-model="form.imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              class="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <!-- Preview -->
            <div v-if="form.imageUrl" class="mt-3">
              <img
                :src="form.imageUrl"
                alt="Preview"
                class="w-full h-40 object-cover rounded-lg border border-gray-700"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400"
              >Demo URL</label
            >
            <input
              v-model="form.demoUrl"
              type="url"
              class="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400"
              >GitHub URL</label
            >
            <input
              v-model="form.githubUrl"
              type="url"
              class="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div class="flex justify-end gap-3 mt-6">
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
