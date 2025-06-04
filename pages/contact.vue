<script setup>
  import { reactive } from "vue";

  const contacts = reactive([
    {
      name: "Email",
      link: "mailto:mdmuhir04@gmail.com",
      title: "mdmuhir04@gmail.com",
      image:
        "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg",
    },
    {
      name: "Skype",
      link: "https://join.skype.com/invite/um45L2MIzxQP",
      title: "Join me on Skype",
      image: "https://api.iconify.design/logos:skype.svg",
    },
    {
      name: "WhatsApp",
      link: "https://wa.link/m875rv",
      title: "Chat on WhatsApp",
      image:
        "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg",
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/md-muhir",
      title: "md-muhir",
      image:
        "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/md_muhiruddin",
      title: "@md_muhiruddin",
      image:
        "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@codegrammarbd",
      title: "@codegrammarbd",
      image:
        "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg",
    },
  ]);
  const others = reactive([
    {
      name: "Birthdate",
      link: "",
      title: "January 20, 2003",
      image:
        "https://api.iconify.design/material-symbols-light:calendar-month-outline-sharp.svg?color=%23f5ca65",
    },
    {
      name: "Location",
      link: "https://goo.gl/maps/Q1PpVkFcAjL2",
      title: "Kushtia, Bangladesh",
      image:
        "https://api.iconify.design/mdi-light:map-marker.svg?color=%23f5ca65",
    },
    {
      name: "Phone",
      link: "tel:+8801751925103",
      title: "+880 1751925103",
      image:
        "https://api.iconify.design/stash:smartphone-light.svg?color=%23f5ca65",
    },
  ]);
</script>

<template>
  <div
    class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 my-8 sm:my-10 "
  >
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-300">Get in Touch</h1>
      <p class="mt-4 text-lg text-gray-400">
        Feel free to reach out — I'm always open to discussing new projects,
        ideas, or opportunities to collaborate.
      </p>
    </div>

    <!-- Contact Info Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#2a2a2a] transition duration-300"
      >
        <div
          class="flex items-center justify-center w-12 h-12 bg-[#333] rounded-full"
        >
          <img :src="contact.image" alt="" class="w-6 h-6" />
        </div>
        <div class="flex-1">
          <h2 class="text-sm text-[#f5ca65] font-medium">{{ contact.name }}</h2>
          <p class="text-gray-200 text-sm break-all">
            <a
              v-if="contact.link"
              :href="contact.link"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            >
              {{ contact.title }}
            </a>
            <span v-else>{{ contact.title }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 my-12"></div>

    <!-- Additional Contact Methods -->
    <div class="bg-[#1e1e1e] p-6 rounded-lg shadow-md">
      <div
        v-for="(contact, index) in others"
        :key="index"
        class="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
      >
        <div
          class="flex items-center justify-center w-12 h-12 bg-[#333] rounded-full"
        >
          <img :src="contact.image" alt="" class="w-6 h-6" />
        </div>
        <div class="flex-1">
          <h2 class="text-sm text-[#f5ca65] font-medium">{{ contact.name }}</h2>
          <p class="text-gray-200 text-sm break-all">
            {{ contact.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
