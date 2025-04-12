<script setup>
  import { useProjects } from "@/composables/projects";
  import { ref, onMounted } from "vue";

  const { projects, addProject, removeProject } = useProjects();
  const isLoaded = ref(false);

  onMounted(() => {
    // Add a small delay to enable transition effects
    setTimeout(() => {
      isLoaded.value = true;
    }, 100);
  });
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <div class="flex flex-col items-start mb-12">
      <h1 class="text-4xl font-bold text-gray-300 mb-3 relative">
        My Projects
        <!-- <span class="absolute bottom-0 left-0 w-20 h-1 bg-[#6b0000]"></span> -->
      </h1>
      <p class="text-gray-300 mt-4 max-w-2xl">
        A collection of my work showcasing various technologies and solutions.
      </p>
    </div>

    <!-- Project Cards -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-gray-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl flex flex-col h-full"
        :class="{
          'opacity-0 translate-y-4': !isLoaded,
          'opacity-100 translate-y-0': isLoaded,
        }"
        :style="{
          transitionDelay: isLoaded
            ? `${projects.indexOf(project) * 100}ms`
            : '0ms',
        }"
      >
        <div class="p-6 flex-grow">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold text-gray-900">
              {{ project.title }}
            </h2>
            <div class="w-2 h-2 rounded-full bg-indigo-600"></div>
          </div>

          <p class="text-gray-600 mb-6 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="mb-4">
            <h4 class="text-sm font-medium text-gray-700 mb-2">
              Technologies:
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 mt-auto">
          <div class="flex gap-4">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              class="text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 px-4 py-2 rounded-md font-medium flex-grow text-center transition-colors duration-300 shadow-sm"
            >
              Live Demo
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              class="text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium flex-grow text-center transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state when no projects -->
    <div v-if="projects.length === 0" class="text-center py-16">
      <div class="text-gray-400 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      <h3 class="text-xl font-medium text-gray-700">No projects yet</h3>
      <p class="text-gray-500 mt-2">Projects you add will appear here.</p>
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
