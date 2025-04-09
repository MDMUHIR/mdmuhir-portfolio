<template>
  <div class="min-h-screen bg-gray-50">
    <div class="navbar fixed top-0 left-0 right-0">
      <Navigation />
    </div>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-[4rem] min-h-screen">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white shadow-md mt-auto">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-gray-500">
          <p>
            &copy; {{ new Date().getFullYear() }} Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  // Layout component setup
</script>
