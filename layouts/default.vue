<template>
  <div class="default-page min-h-screen bg-[#111111]">
    <div
      class="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <Navbar />
    </div>

    <!-- Main Content -->
    <main
      class="container mx-auto px-4 sm:px-6 lg:px-8 mt-[4rem] min-h-screen z-10"
    >
      <div class="max-w-7xl mx-auto py-6 sm:py-8 lg:py-12">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <footer class="shadow-md mt-auto border-t border-gray-800">
      <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-gray-300 text-sm sm:text-base">
          <p>
            &copy; {{ new Date().getFullYear() }} Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
