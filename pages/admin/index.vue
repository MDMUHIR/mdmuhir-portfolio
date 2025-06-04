<script setup>
  import { ref, onMounted } from "vue";
  import { useBlogs } from "~/composables/blogs";
  import { useProjects } from "~/composables/projects";
  import { useSkills } from "~/composables/skills";

  definePageMeta({
    layout: "admin",
  });

  const { blogs } = useBlogs();
  const { projects } = useProjects();
  const { skills } = useSkills();

  const recentActivity = ref([]);

  onMounted(() => {
    // Combine and sort recent items
    const updateRecentActivity = () => {
      const allItems = [
        ...blogs.value.map((blog) => ({ ...blog, type: "blog" })),
        ...projects.value.map((project) => ({ ...project, type: "project" })),
        ...skills.value.map((skill) => ({ ...skill, type: "skill" })),
      ];
      recentActivity.value = allItems
        .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
        .slice(0, 5);
    };

    watch([blogs, projects, skills], updateRecentActivity, { immediate: true });
  });
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold text-white mb-8">Dashboard</h1>

    <!-- Statistics Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <!-- Blogs Stats -->
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold text-white">Blogs</h2>
          <span class="text-3xl font-bold text-red-400">{{
            blogs.length
          }}</span>
        </div>
        <NuxtLink
          to="/admin/adblog"
          class="mt-4 inline-block text-sm text-red-400 hover:text-red-300"
        >
          Manage Blogs →
        </NuxtLink>
      </div>

      <!-- Projects Stats -->
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold text-white">Projects</h2>
          <span class="text-3xl font-bold text-red-400">{{
            projects.length
          }}</span>
        </div>
        <NuxtLink
          to="/admin/adproject"
          class="mt-4 inline-block text-sm text-red-400 hover:text-red-300"
        >
          Manage Projects →
        </NuxtLink>
      </div>

      <!-- Skills Stats -->
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold text-white">Skills</h2>
          <span class="text-3xl font-bold text-red-400">{{
            skills.length
          }}</span>
        </div>
        <NuxtLink
          to="/admin/adskills"
          class="mt-4 inline-block text-sm text-red-400 hover:text-red-300"
        >
          Manage Skills →
        </NuxtLink>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 class="text-xl font-semibold text-white mb-4">Recent Activity</h2>
      <div class="space-y-4">
        <div
          v-for="item in recentActivity"
          :key="item.id"
          class="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
        >
          <div>
            <span class="text-sm font-medium text-red-400 capitalize">{{
              item.type
            }}</span>
            <h3 class="text-white mt-1">{{ item.title || item.name }}</h3>
          </div>
          <NuxtLink
            :to="`/admin/ad${item.type}`"
            class="text-sm text-gray-400 hover:text-white transition-colors"
          >
            View →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
</style>
