<script setup>
  import { useProjects } from "@/composables/projects";
  import { ref, onMounted } from "vue";

  const { projects, addProject, removeProject } = useProjects();
  const isLoaded = ref(false);

  onMounted(() => {
    setTimeout(() => {
      isLoaded.value = true;
    }, 100);
  });
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1
        class="text-4xl  font-bold text-gray-100 mb-2 relative inline-block"
      >
        My Projects
        
      </h1>
      <p class="text-lg text-gray-400 mt-3 max-w-3xl mx-auto">
        A curated collection of my work showcasing innovative solutions and
        technical expertise.
      </p>
    </div>

    <!-- Project Cards -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-700 hover:border-gray-600 group"
        :class="{
          'opacity-0 translate-y-4': !isLoaded,
          'opacity-100 translate-y-0': isLoaded,
        }"
        :style="{
          transitionDelay: isLoaded ? `${index * 50}ms` : '0ms',
        }"
      >
        <!-- Project Image Placeholder (you can replace with actual image) -->
        <div
          class="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <div class="p-6 flex-grow">
          <div class="flex items-center justify-between mb-3">
            <h2
              class="text-xl font-bold text-gray-100 group-hover:text-red-400 transition-colors"
            >
              {{ project.title }}
            </h2>
            <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          </div>

          <p class="text-gray-400 mb-6 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="mb-4">
            <h4
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
            >
              Technologies Used
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
        </div>

        <div class="px-6 pb-6 mt-auto">
          <div class="flex gap-3">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              class="text-sm text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-4 py-2.5 rounded-lg font-medium flex-grow text-center transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Demo
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              class="text-sm border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2.5 rounded-lg font-medium flex-grow text-center transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="projects.length === 0" class="text-center py-20">
      <div
        class="mx-auto w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-medium text-gray-200 mb-2">
        No projects available
      </h3>
      <p class="text-gray-500 max-w-md mx-auto">
        My current work is under development. Check back soon to see my latest
        projects.
      </p>
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

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
