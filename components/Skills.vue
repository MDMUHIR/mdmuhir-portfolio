<script setup>
  import { useSkills } from "@/composables/skills";

  const { skills } = useSkills();

  const getSkillsByCategory = (category) => {
    return skills.value.filter((skill) => skill.category === category);
  };
</script>

<template>
  <div class="py-2">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold text-white sm:text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Skills & Tools
        </h2>
        <!-- <pre>{{ skills }}</pre> -->
        <p class="mt-2 text-lg text-gray-400">
          Technologies and tools I work with
        </p>
      </div>

      <div class="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <PropsSkillCard
          :items="getSkillsByCategory('coreFrontend')"
          heading="Core Frontend"
        />
        <PropsSkillCard
          :items="getSkillsByCategory('frameworkLibraries')"
          heading="Frameworks"
        />
        <PropsSkillCard
          :items="getSkillsByCategory('stylingFrameworks')"
          heading="Styling Frameworks"
        />
        <PropsSkillCard
          :items="getSkillsByCategory('buildTools')"
          heading="Build & Version Ctrl"
        />
        <PropsSkillCard
          :items="getSkillsByCategory('otherSkills')"
          heading="Others"
        />
        <PropsSkillCard
          :items="getSkillsByCategory('learningTools')"
          heading="Currently Learning"
        />
      </div>

      <!-- Currently Learning Section -->
      <!-- <div class="mt-12">
        <PropsSkillCard
          :items="getSkillsByCategory('learningTools')"
          heading="Currently Learning"
        />
      </div> -->
    </div>
  </div>
</template>
