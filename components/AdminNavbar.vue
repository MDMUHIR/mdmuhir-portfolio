<template>
  <nav class="bg-[#111111] border-b border-gray-800 py-4 px-6 relative">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center">
        <!-- Logo/Home Link -->
        <NuxtLink
          to="/"
          class="text-xl font-bold text-white hover:text-red-400 transition"
        >
          Admin Panel
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-300 hover:text-red-400 transition text-sm font-medium"
            :class="{ 'text-red-400': isCurrentPath(link.path) }"
          >
            {{ link.name }}
          </NuxtLink>

          <!-- Logout Button -->
          <button
            @click="handleLogout"
            class="text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                :class="{ hidden: isOpen, 'inline-flex': !isOpen }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{ hidden: !isOpen, 'inline-flex': isOpen }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        :class="{ block: isOpen, hidden: !isOpen }"
        class="md:hidden mt-4 space-y-2"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          :class="{ 'bg-gray-700 text-white': isCurrentPath(link.path) }"
          @click="isOpen = false"
        >
          {{ link.name }}
        </NuxtLink>

        <button
          @click="handleLogout"
          class="w-full text-left text-sm text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from "vue";
  const route = useRoute();
  const isOpen = ref(false);

  const navLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Manage Blogs", path: "/admin/adblog" },
    { name: "Manage Projects", path: "/admin/adproject" },
  ];

  const isCurrentPath = (path) => {
    return route.path === path;
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigateTo("/login");
  };
</script>
