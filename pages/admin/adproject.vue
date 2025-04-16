<script setup>
  definePageMeta({
    layout: "admin",
  });
  import { ref } from "vue";
  import { useProjects } from "@/composables/projects";

  const { projects, addProject, removeProject } = useProjects();
  const showModal = ref(false);

  const form = ref({
    title: "",
    description: "",
    technologiesInput: "",
    demoUrl: "",
    githubUrl: "",
  });

  const resetForm = () => {
    form.value = {
      title: "",
      description: "",
      technologiesInput: "",
      demoUrl: "",
      githubUrl: "",
    };
  };

  const submitProject = async () => {
    const techArray = form.value.technologiesInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    await addProject({
      title: form.value.title,
      description: form.value.description,
      technologies: techArray,
      demoUrl: form.value.demoUrl || undefined,
      githubUrl: form.value.githubUrl || undefined,
    });

    resetForm();
    showModal.value = false;
  };
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-gray-800">My Projects</h1>
      <button
        @click="showModal = true"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Project
      </button>
    </div>

    <!-- Project Cards -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white shadow-md rounded-lg p-6"
      >
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          {{ project.title }}
        </h2>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>

        <div class="mb-3">
          <h4 class="text-sm font-medium text-gray-700">Technologies:</h4>
          <div class="mt-2 flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="flex gap-4 mt-4">
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            class="text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded"
          >
            Live Demo
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>

        <button
          @click="removeProject(project.id)"
          class="mt-4 text-red-500 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>

    <!-- Add Project Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-semibold mb-4">Add Project</h2>
        <form @submit.prevent="submitProject" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Title</label>
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full border rounded-md px-3 py-2 mt-1 focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Description</label
            >
            <textarea
              v-model="form.description"
              required
              class="w-full border rounded-md px-3 py-2 mt-1 focus:ring-blue-300 focus:outline-none"
            ></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Technologies (comma-separated)</label
            >
            <input
              v-model="form.technologiesInput"
              type="text"
              required
              class="w-full border rounded-md px-3 py-2 mt-1 focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Demo URL</label
            >
            <input
              v-model="form.demoUrl"
              type="url"
              class="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >GitHub URL</label
            >
            <input
              v-model="form.githubUrl"
              type="url"
              class="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div class="flex justify-end gap-3 mt-6">
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
