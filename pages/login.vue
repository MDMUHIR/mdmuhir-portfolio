<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();
  const email = ref("");
  const password = ref("");
  const error = ref("");

  // Static credentials
  const ADMIN_EMAIL = "admin@muhir.com";
  const ADMIN_PASSWORD = "Muhir@03";

  const login = async () => {
    try {
      if (email.value === ADMIN_EMAIL && password.value === ADMIN_PASSWORD) {
        localStorage.setItem("isAuthenticated", "true");
        await navigateTo("/admin");
      } else {
        error.value = "Invalid credentials";
      }
    } catch (e) {
      error.value = "An error occurred during login";
      console.error("Login error:", e);
    }
  };
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#111111]">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">Admin Login</h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            required
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
