<template>
  <nav class="bg-[#111111] shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink
              to="/"
              active-class="border-indigo-500"
              class="text-xl font-bold text-gray-200"
            >
              MD MUHIR
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            
            <NuxtLink
              to="/about"
              active-class="border-indigo-500"
              class="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/projects"
              active-class="border-indigo-500"
              class="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
            >
              Projects
            </NuxtLink>
            <NuxtLink
              to="/blogs"
              active-class="border-indigo-500"
              class="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
            >
              Blogs
            </NuxtLink>
            <NuxtLink
              to="/contact"
              active-class="border-indigo-500"
              class="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  // Navigation component setup
</script>
