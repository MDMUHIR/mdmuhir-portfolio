<script setup lang="ts">
  import "@/assets/css/custom.css";
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-white min-h-[80vh] flex items-center">
      <div class="sm:container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
              MD. MUHIR UDDIN
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Frontend developer with a passion for turning designs into
              seamless digital experiences using the latest web technologies.
              Let’s connect and build something great together.
            </p>
            <div class="flex space-x-4">
              <div class="buttons flex justify-center z-20 my-6">
                <a
                  href="https://github.com/MDMUHIR/CV.pdf/archive/refs/heads/main.zip"
                  class="custom-btn btn-12 mr-2"
                >
                  <span>Download</span><span>CV.pdf </span></a
                >
                <a
                  href="https://github.com/MDMUHIR"
                  class="custom-btn btn-12 ml-2"
                >
                  <span>Visit</span><span>GitHub </span></a
                >
              </div>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative">
              <img
                src="/images/myimg.png"
                alt="Md. Muhir Uddin"
                class="rounded-xl w-full max-w-[25rem] h-auto framed-image1 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="bg-[#1a1a1a] text-white py-20 rounded-b-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <Skills />
      </div>
    </section>

    <!-- Recent Projects Section -->
    <!-- <section class="py-12">
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
    </section> -->
  </div>
</template>
