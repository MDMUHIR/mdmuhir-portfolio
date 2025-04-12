<template>
  <div class="min-h-screen bg-[#111111]">
    <div class="navbar fixed top-0 left-0 right-0 z-50">
      <Navigation />
    </div>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py- mt-[4rem] min-h-screen  z-10">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="shadow-md mt-auto">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-gray-300">
          <p>
            &copy; {{ new Date().getFullYear() }} Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

