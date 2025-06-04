<script setup lang="ts">
  import "@/assets/css/custom.css";
</script>

<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section
      class="hero-section dark:text-gray-200 min-h-[80vh] flex items-center relative overflow-hidden"
    >
      <Background />

      <div
        class="sm:container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-between relative"
        >
          <div class="md:w-1/2 mb-10 md:mb-0 z-30">
            <h1
              class="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-[#c4c4c4]"
            >
              MD. MUHIR UDDIN
            </h1>
            <p
              class="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed ml-1 select-none"
            >
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

          <!-- Neon Style -->
          <div
            class="absolute bottom-0 right-0 w-full h-[1.5rem] bg-white/25 filter blur-3xl z-10"
          ></div>
        </div>
      </div>
    </section>

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
  /* .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s linear infinite;
  } */
  /* <div
        class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-60 blur-xl group-hover:opacity-75 transition-all duration-500 animate-gradient z-10"
      ></div> */

  /* @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  } */

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

  /* .framed-image1 {
    box-shadow: -50px -50px 0 -45px var(--red), 50px 50px 0 -45px var(--red);
  } */
  .framed-image1 {
    --red: #ac0000;

    /* box-shadow: -50px -50px 0 -45px var(--red), 50px 50px 0 -45px var(--red); */
    box-shadow: 
    /* var(--red) 5px 5px, rgba(240, 46, 46, 0.3) 10px 10px,
      rgba(240, 46, 46, 0.2) 15px 15px, rgba(240, 46, 46, 0.1) 20px 20px,
      rgba(240, 46, 46, 0.05) 25px 25px, */ -50px -50px
        0 -45px var(--red),
      50px 50px 0 -45px var(--red);
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
