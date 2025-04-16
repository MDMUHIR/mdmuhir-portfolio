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

<style scoped>
  .hero-section {
    background: linear-gradient(to right, #111111, #111111);
    /* 121212 */
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(25, 118, 210, 0.1),
      transparent 50%
    );
  }

  .framed-image1 {
    box-shadow: -50px -50px 0 -45px var(--red), 50px 50px 0 -45px var(--red);
  }

  .custom-btn {
    color: #fff;
    padding: 10px 25px;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
  }
  /* 12 */
  .btn-12 {
    position: relative;
    right: 20px;
    bottom: 20px;
    border: none;
    box-shadow: none;
    width: 130px;
    height: 40px;
    line-height: 40px;
    -webkit-perspective: 230px;
    perspective: 230px;
  }
  .btn-12 span {
    background: rgba(0, 0, 0, 0.667);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.658) 0%,
      rgb(0, 0, 0) 100%
    );
    display: block;
    position: absolute;
    width: 130px;
    height: 40px;
    border: 1px solid rgb(212, 59, 59);
    margin: 0;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .btn-12 span:nth-child(1) {
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  .btn-12 span:nth-child(2) {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  .btn-12:hover span:nth-child(1) {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  .btn-12:hover span:nth-child(2) {
    color: transparent;
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
</style>
