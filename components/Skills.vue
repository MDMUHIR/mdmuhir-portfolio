<script setup lang="ts">
  interface Skill {
    name: string;
    link: string;
    icon: string;
    description?: string;
  }

  const coreFrontend = reactive<Skill[]>([
    {
      name: "HTML5",
      link: "https://www.w3.org/html/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS3",
      link: "https://www.w3schools.com/css/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
  ]);

  // Frameworks and Libraries

  const frameworkLibraries = reactive([
    {
      name: "Vue.js",
      link: "https://vuejs.org/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    },
    {
      name: "Nuxt.js",
      link: "https://nuxtjs.org/",
      icon: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
  ]);

  // Styling Frameworks:
  const stylingFrameworks = reactive([
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
  ]);

  // Build Tools and Version Control:
  const buildToolsAndVersionCtrl = reactive([
    {
      name: "Vite",
      link: "https://vite.dev/",
      icon: "https://vite.dev/logo.svg",
    },
    {
      name: "Git/GitHub",
      link: "https://github.com/",
      icon: "https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png",
    },
  ]);

  // State Management:
  const otherSkills = reactive([
    {
      name: "Pinia",
      description: "State management for vue.js",
      link: "https://pinia.vuejs.org/",
      icon: "https://pinia.vuejs.org/logo.svg",
    },
    {
      name: "VS Code",
      description: "Professional code editor and development environment.",
      link: "https://code.visualstudio.com/",
      icon: "https://api.iconify.design/mdi:microsoft-visual-studio-code.svg?color=%232d92f0",
    },
  ]);
</script>

<template>
  <div class="max-w-4xl">
    <div class="text- mb-16">
      <h2
        class="text-4xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-stone-400 to-blue-200"
      >
        Skills & Tools
      </h2>
      <p class="text-gray-300 text-lg">
        My go-to technologies for modern web development
      </p>
    </div>
    <!-- skills -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <PropsSkillCard :items="coreFrontend" heading="Core Frontend" />
      <PropsSkillCard :items="frameworkLibraries" heading="Frameworks" />
      <PropsSkillCard :items="stylingFrameworks" heading="Styling Frameworks" />
      <PropsSkillCard
        :items="buildToolsAndVersionCtrl"
        heading="Build & Version Ctrl"
      />
      <PropsSkillCard :items="otherSkills" heading="Others" />
    </div>
  </div>
</template>
