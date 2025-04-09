<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Get in Touch
      </h1>
      <p class="mt-4 text-xl text-gray-500">
        Have a question or want to work together?
      </p>
    </div>

    <form
      @submit.prevent="submitForm"
      class="space-y-6 bg-white p-8 rounded-lg shadow-sm"
    >
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700"
          >Message</label
        >
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        ></textarea>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {{ isSubmitting ? "Sending..." : "Send Message" }}
        </button>
      </div>

      <!-- Success/Error Messages -->
      <div
        v-if="submitStatus"
        :class="`mt-4 p-4 rounded-md ${
          submitStatus.type === 'success'
            ? 'bg-green-50 text-green-800'
            : 'bg-red-50 text-red-800'
        }`"
      >
        {{ submitStatus.message }}
      </div>
    </form>

    <!-- Contact Information -->
    <div class="mt-12 bg-white p-8 rounded-lg shadow-sm">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        Other Ways to Connect
      </h2>
      <div class="space-y-4">
        <div class="flex items-center">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span class="ml-3 text-gray-600">contact@example.com</span>
        </div>
        <div class="flex items-center">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span class="ml-3 text-gray-600">City, Country</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { collection, addDoc } from "firebase/firestore";

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface SubmitStatus {
    type: "success" | "error";
    message: string;
  }

  const formData = ref<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const isSubmitting = ref(false);
  const submitStatus = ref<SubmitStatus | null>(null);

  const submitForm = async () => {
    isSubmitting.value = true;
    submitStatus.value = null;

    try {
      await addDoc(collection(db, "messages"), {
        ...formData.value,
        createdAt: new Date(),
      });

      submitStatus.value = {
        type: "success",
        message: "Thank you for your message! I will get back to you soon.",
      };

      // Reset form
      formData.value = {
        name: "",
        email: "",
        message: "",
      };
    } catch (error) {
      submitStatus.value = {
        type: "error",
        message:
          "An error occurred while sending your message. Please try again.",
      };
      console.error("Error submitting form:", error);
    } finally {
      isSubmitting.value = false;
    }
  };
</script>
