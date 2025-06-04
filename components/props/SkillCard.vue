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

  // Track which skill is being hovered
  const hoveredSkillIndex = ref<number | null>(null);

  // Set the hovered skill index
  const showTooltip = (index: number) => {
    hoveredSkillIndex.value = index;
  };

  // Clear the hovered skill index
  const hideTooltip = () => {
    hoveredSkillIndex.value = null;
  };
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
          <div class="flex items-center">
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
            </h2>
            <h2
              v-if="props.heading === 'Currently Learning'"
              class="ml-2 inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800"
            >
              New
            </h2>
          </div>
        </slot>
      </div>
      <!-- skill list -->
      <div class="space-y-2">
        <div
          v-for="(skill, index) in props.items"
          :key="index"
          class="skill-item relative"
        >
          <a
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center p-3 rounded-md duration-300 gap-3 hover:bg-gray-800/50 border-l-2 border-blue-500/30 hover:border-blue-500"
            @mouseenter="showTooltip(index)"
            @mouseleave="hideTooltip()"
          >
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="w-6 h-6 object-contain transition-transform duration-300 hover:scale-110"
            />
            <div class="flex flex-col flex-1">
              <span class="font-medium text-gray-200">
                {{ skill.name }}
              </span>
              <!-- Tooltip that appears on hover -->
              <div
                v-if="skill.description && hoveredSkillIndex === index"
                class="tooltip"
              >
                {{ skill.description }}
              </div>
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

  .tooltip {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(30, 41, 59, 0.95);
    color: #e2e8f0;
    padding: 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    z-index: 50;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(59, 130, 246, 0.2);
    margin-top: 0.5rem;
    max-width: 50%;
    animation: fadeIn 0.2s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
