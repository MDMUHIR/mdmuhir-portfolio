<script setup>
  import { useSkills } from "@/composables/skills";

  const { skills } = useSkills();

  const getSkillsByCategory = (category) => {
    return skills.value.filter((skill) => skill.category === category);
  };
</script>

<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Skills & Tools
        </h2>
        <p class="mt-4 text-lg text-gray-400">
          Technologies and tools I work with
        </p>
      </div>

      <!-- Core Frontend -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-300 mb-6">Core Frontend</h3>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          <a
            v-for="skill in getSkillsByCategory('coreFrontend')"
            :key="skill.id"
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <img :src="skill.icon" :alt="skill.name" class="h-12 w-12 mb-3" />
            <span class="text-sm font-medium text-gray-300">{{
              skill.name
            }}</span>
          </a>
        </div>
      </div>

      <!-- Frameworks and Libraries -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-300 mb-6">
          Frameworks & Libraries
        </h3>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          <a
            v-for="skill in getSkillsByCategory('frameworkLibraries')"
            :key="skill.id"
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <img :src="skill.icon" :alt="skill.name" class="h-12 w-12 mb-3" />
            <span class="text-sm font-medium text-gray-300">{{
              skill.name
            }}</span>
          </a>
        </div>
      </div>

      <!-- Styling Frameworks -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-300 mb-6">
          Styling Frameworks
        </h3>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          <a
            v-for="skill in getSkillsByCategory('stylingFrameworks')"
            :key="skill.id"
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <img :src="skill.icon" :alt="skill.name" class="h-12 w-12 mb-3" />
            <span class="text-sm font-medium text-gray-300">{{
              skill.name
            }}</span>
          </a>
        </div>
      </div>

      <!-- Build Tools and Version Control -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-300 mb-6">
          Build Tools & Version Control
        </h3>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          <a
            v-for="skill in getSkillsByCategory('buildTools')"
            :key="skill.id"
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <img :src="skill.icon" :alt="skill.name" class="h-12 w-12 mb-3" />
            <span class="text-sm font-medium text-gray-300">{{
              skill.name
            }}</span>
          </a>
        </div>
      </div>

      <!-- Other Skills -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-300 mb-6">Other Skills</h3>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          <a
            v-for="skill in getSkillsByCategory('otherSkills')"
            :key="skill.id"
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <img :src="skill.icon" :alt="skill.name" class="h-12 w-12 mb-3" />
            <span class="text-sm font-medium text-gray-300">{{
              skill.name
            }}</span>
            <span
              v-if="skill.description"
              class="text-xs text-gray-400 text-center mt-1"
            >
              {{ skill.description }}
            </span>
          </a>
        </div>
      </div>

      <!-- Currently Learning -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-300 mb-6">
          Currently Learning
        </h3>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          <a
            v-for="skill in getSkillsByCategory('learningTools')"
            :key="skill.id"
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <img :src="skill.icon" :alt="skill.name" class="h-12 w-12 mb-3" />
            <span class="text-sm font-medium text-gray-300">{{
              skill.name
            }}</span>
            <span
              v-if="skill.description"
              class="text-xs text-gray-400 text-center mt-1"
            >
              {{ skill.description }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
