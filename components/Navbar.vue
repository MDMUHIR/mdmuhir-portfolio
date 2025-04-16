<script setup lang="ts">
  const isOpen = ref(false);

  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<template>
  <nav class="bg-[#111111] shadow-md relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center justify-between w-full">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink
              to="/"
              active-class="border-indigo-500"
              class="text-xl font-bold text-gray-200"
            >
              MD MUHIR
            </NuxtLink>
          </div>
          <!-- Desktop Navigation -->
          <div class="hidden md:flex md:space-x-8">
            <NuxtLink
              to="/about"
              active-class="border-indigo-500"
              class="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/projects"
              active-class="border-indigo-500"
              class="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200"
            >
              Projects
            </NuxtLink>
            <NuxtLink
              to="/blogs"
              active-class="border-indigo-500"
              class="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200"
            >
              Blogs
            </NuxtLink>
            <NuxtLink
              to="/contact"
              active-class="border-indigo-500"
              class="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200"
            >
              Contact
            </NuxtLink>
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button
              @click="toggleMenu"
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
      </div>
    </div>
    <!-- Mobile menu -->
    <div
      :class="{ block: isOpen, hidden: !isOpen }"
      class="md:hidden absolute w-full bg-[#111111] shadow-lg z-50"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="(link, index) in ['/about', '/projects', '/blogs', '/contact']"
          :key="index"
          :to="link"
          active-class="bg-gray-700 text-white"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          @click="isOpen = false"
        >
          {{ link.slice(1).charAt(0).toUpperCase() + link.slice(2) }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
