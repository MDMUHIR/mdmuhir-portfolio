<script setup>
  // Sample services data for initial display until Firebase data is loaded
  const services = ref([
    {
      id: "service1",
      title: "Web Development",
      description:
        "Custom website development using modern frameworks and responsive design principles.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "development",
    },
    
    // {
    //   id: "service3",
    //   title: "API Integration",
    //   description:
    //     "Seamless integration with third-party APIs and services for enhanced functionality.",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    //   category: "development",
    // },
    {
      id: "service4",
      title: "AI Agent Development",
      description:
        "Custom AI assistant and agent development to automate tasks and enhance user experiences with intelligent solutions.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "ai",
    },
  ]);
</script>

<template>
  <div class="main">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold text-white sm:text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" 
        >
          Services
        </h2>
        <p class="mt-2 text-lg text-gray-400">
          Professional services I offer to clients
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card bg-gray-800/50 rounded-lg p-6 border border-gray-700 "
        >
          <div class="flex items-start">
            <div class="flex-shrink-0 mr-4">
              <img
                :src="service.icon"
                :alt="service.title"
                class="w-12 h-12 object-contain p-2 bg-blue-500/10 rounded-lg"
              />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white mb-2">
                {{ service.title }}
              </h3>
              <p class="text-gray-400">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .service-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  
</style>
