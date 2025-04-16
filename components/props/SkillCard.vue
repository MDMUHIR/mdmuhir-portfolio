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
  <div
    class="skill-card"
    :class="{ 'learning-card': props.heading === 'Currently Learning' }"
  >
    <div class="content">
      <!-- Heading -->
      <div class="heading">
        <slot>
          <h2
            class="text-lg font-semibold text-white mb-2 bg-gradient-to-r"
            :class="
              props.heading === 'Currently Learning'
                ? 'from-green-400 to-blue-500'
                : 'from-blue-500 to-purple-500'
            "
            style="
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
          >
            {{ props.heading }}
            <span
              v-if="props.heading === 'Currently Learning'"
              class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
              >New</span
            >
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
              <span
                v-if="skill.description"
                class="text-gray-400 text-xs mt-0.5"
              >
                {{ skill.description }}
              </span>
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
  .learning-card {
    border: 1px solid rgba(74, 222, 128, 0.2);
    border-radius: 0.5rem;
    padding: 0.75rem;
    background: rgba(74, 222, 128, 0.05);
    position: relative;
    overflow: hidden;
  }

  .learning-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(74, 222, 128, 0),
      rgba(74, 222, 128, 0.6),
      rgba(74, 222, 128, 0)
    );
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
</style>
