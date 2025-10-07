<script setup></script>

<template>
  <!-- Hero Section -->
  <section
    class="hero-section dark:text-gray-200 min-h-[75vh] flex items-center relative overflow-hidden "
  >
    <Background />

    <div
      class="sm:container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 justify-center"
    >
      <div
        class="flex flex-col md:flex-row items-center justify-center relative"
      >
        <div class="md:w-2/3 items-center justify-center mb-10 md:mb-0 z-30">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-[#c4c4c4]"
          >
            MD. MUHIR UDDIN
          </h1>
          <p
            class="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed ml-1 select-none"
          >
            Frontend developer with a passion for turning designs into seamless
            digital experiences using the latest web technologies. Let’s connect
            and build something great together.
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

        <div class="md:w-1/3 flex justify-cen ter justify- end">
          <div
            class="relative w-[20rem] h-[20rem] flex justify-center items-center p-1"
          >
            <!-- Rotating Circular Frame with top & bottom lines -->
            <div
              class="absolute inset-0 rounded-full border-4 border-t-emerald-300 border-red-600 animate-spin-slow p-4 box-content"
            ></div>

            <!-- Static Circular Image -->
            <img
              src="https://rgbqjndblvvdxzmikpfv.supabase.co/storage/v1/object/public/images/MY-Photo.jpg"
              alt="Md. Muhir Uddin"
              class="rounded-full w-full h-full object-cover shadow-2xl relative z-10"
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

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* .photo-frame {
    box-shadow: -50px -50px 0 -45px var(--red), 50px 50px 0 -45px var(--red);
  } */

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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.658) 0%, rgb(0, 0, 0) 100%);
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
