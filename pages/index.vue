<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-12 px-4 sm:px-6 lg:px-8">
      <h1
        class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
      >
        Welcome to My Portfolio
      </h1>
      <p
        class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
      >
        Full Stack Developer passionate about creating beautiful and functional
        web applications
      </p>
      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md shadow">
          <NuxtLink
            to="/contact"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get in touch
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Skills
        </h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="p-4 bg-white rounded-lg shadow-sm text-center"
          >
            <h3 class="text-lg font-medium text-gray-900">{{ skill.name }}</h3>
            <p class="mt-1 text-sm text-gray-500">{{ skill.level }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects Section -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Recent Projects
        </h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div
            v-for="project in projects"
            :key="project.id"
            class="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">
                {{ project.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                {{ project.description }}
              </p>
              <div class="mt-4">
                <NuxtLink
                  :to="`/projects/${project.id}`"
                  class="text-indigo-600 hover:text-indigo-500"
                >
                  Learn more →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { collection, getDocs } from "firebase/firestore";
  import { onMounted } from "vue";

  const skills = ref([
    { name: "JavaScript", level: "Advanced" },
    { name: "Vue.js", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
  ]);

  const projects = ref([]);

  // Fetch projects from Firebase
  const { $firebase } = useNuxtApp();

  onMounted(async () => {
    try {
      const querySnapshot = await getDocs(collection($firebase.db, "projects"));
      projects.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  });
</script>
