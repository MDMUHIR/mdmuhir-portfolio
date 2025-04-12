<script setup lang="ts">
  interface SkillItem {
    name: string;
    link: string;
    icon: string;
    description?: string;
  }

  const props = defineProps({
    items: {
      type: Array as PropType<SkillItem[]>,
      required: true,
    },
    heading: {
      type: String,
      default: "",
    },
  });
</script>

<template>
  <div class="skill-card ">
    <div class="content">
      <!-- Heading -->
      <div class="heading">
        <slot>
          <h2
            class="text-lg font-semibold text-white mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            {{ props.heading }}
          </h2>
        </slot>
      </div>
      <!-- skill list -->
      <div class="space-y-2">
        <div
          v-for="(skill, index) in props.items"
          :key="index"
          class="skill-item"
        >
          <a
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center p-2 rounded-md duration-300 gap-2 hover:text-gray-500 border-red-400 border-l"
          >
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="w-5 h-5 object-contain transition-transform duration-300"
            />
            <div class="flex flex-col">
              <span class="font-medium">
                {{ skill.name }}
              </span>
              <!-- <span v-if="skill.description" class="text-gray-400 text-sm mt-1">
                {{ skill.description }}
              </span> -->
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  a:hover img {
    filter: brightness(1.2);
  }
</style>
