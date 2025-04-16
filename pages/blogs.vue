<script setup>
  import { useBlogs } from "@/composables/blogs";
  import { useSlugify } from "@/composables/useSlugify";
  import { ref, onMounted } from "vue";

  const { blog, blogs, getBlogById } = useBlogs();

  const isLoaded = ref(false);
  const expandedBlogId = ref(null);

  const toggleBlog = (blogId) => {
    expandedBlogId.value = expandedBlogId.value === blogId ? null : blogId;
    getBlogById(blogId);
  };

  onMounted(() => {
    setTimeout(() => {
      isLoaded.value = true;
    }, 100);
  });
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <!-- Hero Header -->
    <div class="text-center mb-16">
      <h1
        class="text-4xl font-bold text-gray-100 mb-2 relative inline-block"
      >
        My Blogs
        
      </h1>
      <p class="text-lg text-gray-400 mt-3 max-w-3xl mx-auto">
        Deep dives into technology, design patterns, and innovative solutions
        from my development journey.
      </p>
    </div>

    <!-- Blog Modal -->
    <div
      v-if="expandedBlogId"
      class="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 overflow-y-auto transition-opacity duration-300 ease-out"
      @click.self="expandedBlogId = null"
    >
      <div
        class="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full max-w-4xl shadow-xl relative mx-auto my-12 transition-all duration-300 transform"
        :class="isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
      >
        <button
          @click="expandedBlogId = null"
          class="absolute top-6 right-6 text-gray-400 hover:text-gray-200 transition p-2 rounded-lg hover:bg-gray-700"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="space-y-8">
          <div>
            <div class="flex flex-wrap items-center gap-3 mb-5">
              <span
                class="text-sm font-medium text-red-400 px-3 py-1 bg-gray-700 rounded-full"
              >
                {{
                  new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                }}
              </span>
              <span
                class="text-sm text-gray-400 px-3 py-1 bg-gray-700 rounded-full"
              >
                {{ Math.ceil(blog.content.length / 1200) }} min read
              </span>
            </div>
            <h2
              class="text-3xl md:text-4xl font-bold text-gray-100 leading-tight mb-6"
            >
              {{ blog.title }}
            </h2>
          </div>

          <div class="prose prose-invert max-w-none text-gray-300">
            <p class="text-xl text-gray-400 mb-8">
              {{ blog.summary }}
            </p>
            <div class="whitespace-pre-wrap text-gray-300">
              {{ blog.content }}
            </div>
          </div>

          <div class="pt-8 border-t border-gray-700/50">
            <h4
              class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
            >
              Tags
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in blog.tags"
                :key="tag"
                class="bg-gray-700 text-red-300 text-xs px-3 py-1 rounded-full font-medium hover:bg-gray-600 transition-colors"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Grid -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(blog, index) in blogs"
        :key="blog.id"
        class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-700 hover:border-gray-600 group"
        :class="{
          'opacity-0 translate-y-4': !isLoaded,
          'opacity-100 translate-y-0': isLoaded,
        }"
        :style="{
          transitionDelay: isLoaded ? `${index * 50}ms` : '0ms',
        }"
      >
        <!-- Featured Image Placeholder -->
        <div
          class="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>


        </div>

        <div class="p-6 flex-grow">
          <div class="flex items-center justify-between mb-3">
            <h3
              class="text-xl font-bold text-gray-100 group-hover:text-red-400 transition-colors"
            >
              {{ blog.title }}
            </h3>
            <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          </div>

          <p class="text-gray-400 mb-6 line-clamp-3">
            {{ blog.summary }}
          </p>

          <div class="mb-4">
            <h4
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
            >
              Tags
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in blog.tags"
                :key="tag"
                class="bg-gray-700 text-red-300 text-xs px-3 py-1 rounded-full font-medium hover:bg-gray-600 transition-colors"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 mt-auto">
          <button
            @click="toggleBlog(blog.id)"
            class="w-full text-sm text-white bg-gradient-to-r from-[#ed4c3b] to-red-800 hover:from-red-700 hover:to-red-900 px-4 py-2.5 rounded-lg font-medium text-center transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Read Article
          </button>
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <div v-if="blogs.length === 0" class="text-center py-20">
      <div
        class="mx-auto w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-medium text-gray-200 mb-2">
        No blogs available
      </h3>
      <p class="text-gray-500 max-w-md mx-auto">
        I'm currently crafting some in-depth articles. Check back soon to see my latest
        blog posts.
      </p>
    </div>
  </div>
</template>

<style scoped>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .prose {
    line-height: 1.8;
  }

  .prose p:not(:last-child) {
    margin-bottom: 1.5em;
  }

  .prose-invert {
    --tw-prose-body: theme(colors.gray.300);
    --tw-prose-headings: theme(colors.gray.100);
    --tw-prose-lead: theme(colors.gray.400);
    --tw-prose-links: theme(colors.red.300);
    --tw-prose-bold: theme(colors.gray.100);
    --tw-prose-counters: theme(colors.gray.400);
    --tw-prose-bullets: theme(colors.gray.600);
    --tw-prose-hr: theme(colors.gray.700);
    --tw-prose-quotes: theme(colors.gray.100);
    --tw-prose-quote-borders: theme(colors.gray.700);
    --tw-prose-captions: theme(colors.gray.400);
    --tw-prose-code: theme(colors.gray.100);
    --tw-prose-pre-code: theme(colors.gray.300);
    --tw-prose-pre-bg: theme(colors.gray.900);
    --tw-prose-th-borders: theme(colors.gray.600);
    --tw-prose-td-borders: theme(colors.gray.700);
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
