<script setup lang="ts">
import "@/assets/css/custom.css";
</script>

<template>
  <div class="overflow-hidden container mx-auto ">
    <HeroSection class="rounded-2xl border-[#C4C4C4] border-4" />

    <!-- Services Section -->
    <section
      class="bg-gradient-to-t from-[#161616] to-[#161616] text-white pt-10 pb-20 relative overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <Services />
      </div>
    </section>

    <!-- Skills Section -->
    <section
      class="bg-gradient-to-b from-[#161616] to-[#111111] text-white pt-10 pb-20 relative overflow-hidden"
    >
      <div
        class="absolute -top-10 right-0 w-full h-[5rem] bg-sky-500/10 filter blur-3xl z-10"
      ></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 relative">
        <Skills />
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
