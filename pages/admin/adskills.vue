<script setup>
  definePageMeta({
    layout: "admin",
  });

  import { ref } from "vue";
  import { useSkills } from "@/composables/skills";

  const { skills, addSkill, removeSkill, updateSkill } = useSkills();
  const showModal = ref(false);
  const editMode = ref(false);
  const selectedSkill = ref(null);

  const form = ref({
    name: "",
    link: "",
    icon: "",
    description: "",
    category: "coreFrontend", // Default category
  });

  const categories = [
    { id: "coreFrontend", name: "Core Frontend" },
    { id: "frameworkLibraries", name: "Frameworks & Libraries" },
    { id: "stylingFrameworks", name: "Styling Frameworks" },
    { id: "buildTools", name: "Build Tools & Version Control" },
    { id: "otherSkills", name: "Other Skills" },
    { id: "learningTools", name: "Currently Learning" },
  ];

  const resetForm = () => {
    form.value = {
      name: "",
      link: "",
      icon: "",
      description: "",
      category: "coreFrontend",
    };
    editMode.value = false;
    selectedSkill.value = null;
  };

  const editSkill = (skill) => {
    selectedSkill.value = skill;
    form.value = { ...skill };
    editMode.value = true;
    showModal.value = true;
  };

  const submitSkill = async () => {
    if (editMode.value && selectedSkill.value) {
      await updateSkill(selectedSkill.value.id, form.value);
    } else {
      await addSkill(form.value);
    }
    resetForm();
    showModal.value = false;
  };
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-white">Manage Skills</h1>
      <button
        @click="showModal = true"
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Add Skill
      </button>
    </div>

    <!-- Skills List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="category in categories" :key="category.id" class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-300">{{ category.name }}</h2>
        <div class="space-y-4">
          <div
            v-for="skill in skills.filter((s) => s.category === category.id)"
            :key="skill.id"
            class="bg-gray-800 p-4 rounded-lg shadow flex items-center justify-between border border-gray-700"
          >
            <div class="flex items-center space-x-3">
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-8 h-8 object-contain"
              />
              <span class="font-medium text-white">{{ skill.name }}</span>
            </div>
            <div class="flex space-x-2">
              <button
                @click="editSkill(skill)"
                class="text-red-400 hover:text-red-300"
              >
                Edit
              </button>
              <button
                @click="removeSkill(skill.id)"
                class="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">
          {{ editMode ? "Edit Skill" : "Add New Skill" }}
        </h2>
        <form @submit.prevent="submitSkill" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Link</label>
            <input
              v-model="form.link"
              type="url"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Icon URL</label
            >
            <input
              v-model="form.icon"
              type="url"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Description</label
            >
            <textarea
              v-model="form.description"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Category</label
            >
            <select
              v-model="form.category"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              @click="
                showModal = false;
                resetForm();
              "
              class="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {{ editMode ? "Update" : "Add" }} Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
