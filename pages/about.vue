<script setup lang="ts">
  const experiences = ref([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Freelance",
      period: "2021 - Present",
      description:
        "Leading development of enterprise web applications using modern technologies.",
      achievements: [
        "Implemented microservices architecture reducing system load by 40%",
        "Led a team of 5 developers in successful project delivery",
        "Introduced automated testing improving code coverage by 75%",
      ],
    },
    
  ]);

  const educations = ref([
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2018",
      description: "Specialized in Web Technologies and Cloud Computing",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "State University",
      year: "2016",
      description: "Major in Software Engineering",
    },
  ]);
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- About Section -->
    <section class="space-y-8">
      <div class="text-center">
        <h1 class="text-3xl font-extrabold text-gray-100 sm:text-4xl">
          About Me
        </h1>
        <p class="mt-4 text-xl text-gray-500">
          Passionate about creating innovative web solutions
        </p>
      </div>

      <!-- Bio Section -->
      <div class="prose prose-lg mx-auto mt-8">
        <p class="text-gray-400">
          With expertise in web development and hands-on experience using a
          variety of powerful tools, I embarked on my journey in 2021 to craft a
          meaningful career in this dynamic field. My passion for technology
          drives me to continually enhance my skills, and I'm always eager to
          embrace new challenges, explore emerging frameworks, and stay at the
          cutting edge of web development. As an enthusiastic learner and
          developer, I'm open to exciting opportunities that allow me to
          innovate and grow in this ever-evolving landscape!
        </p>
      </div>

      <!-- Experience Section -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-100 mb-6">
          Professional Experience
        </h2>
        <div class="space-y-8">
          <div
            v-for="experience in experiences"
            :key="experience.id"
            class="bg-[#1b1b1b] p-6 rounded-lg shadow-sm"
          >
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-semibold text-gray-50">
                  {{ experience.title }}
                </h3>
                <p class="text-gray-400">{{ experience.company }}</p>
              </div>
              <span class="text-gray-500">{{ experience.period }}</span>
            </div>
            <p class="mt-4 text-gray-400">{{ experience.description }}</p>
            <ul class="mt-4 list-disc list-inside text-gray-400">
              <li
                v-for="(achievement, index) in experience.achievements"
                :key="index"
              >
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-100 mb-6">Education</h2>
        <div class="space-y-6">
          <div
            v-for="education in educations"
            :key="education.id"
            class="bg-[#1b1b1b] p-6 rounded-lg shadow-sm"
          >
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-semibold text-gray-50">
                  {{ education.degree }}
                </h3>
                <p class="text-gray-400">{{ education.institution }}</p>
              </div>
              <span class="text-gray-500">{{ education.year }}</span>
            </div>
            <p class="mt-2 text-gray-400">{{ education.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
