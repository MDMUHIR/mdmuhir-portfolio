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
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Hero Header -->
    <div class="text-center mb-20">
      <div class="relative inline-block">
        <h1
          class="text-4xl font-bold text-gray-100 mb-2 relative inline-block"
        >
          My Blogs
          
        </h1>
      </div>
      <p class="text-xl text-gray-400 mt-3 max-w-3xl mx-auto leading-relaxed">
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
        class="bg-gray-800/95 border border-gray-700/50 rounded-2xl p-8 w-full max-w-4xl shadow-2xl relative mx-auto my-12 transition-all duration-300 transform"
        :class="isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
      >
        <button
          @click="expandedBlogId = null"
          class="absolute top-6 right-6 text-gray-400 hover:text-gray-200 transition p-2 rounded-lg hover:bg-gray-700/50 backdrop-blur-sm"
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
                class="text-sm font-medium text-indigo-400/90 px-3 py-1 bg-indigo-900/20 rounded-full"
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
                class="text-sm text-gray-500/80 px-3 py-1 bg-gray-700/30 rounded-full"
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
            <p class="text-xl text-gray-400 mb-8 leading-relaxed">
              {{ blog.summary }}
            </p>
            <div class="whitespace-pre-wrap text-gray-300/90 leading-relaxed">
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
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-indigo-300/90 hover:bg-indigo-900/30 transition-colors"
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
        class="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-700/30 hover:border-indigo-500/30 backdrop-blur-sm"
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
          class="h-48 bg-gradient-to-br from-gray-700 to-gray-900/80 flex items-center justify-center relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-gray-600/50"
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

          <!-- Date Badge -->
          <div class="absolute bottom-4 left-4 z-20">
            <span
              class="text-xs font-semibold text-indigo-300/90 px-3 py-1 bg-indigo-900/30 rounded-full backdrop-blur-sm"
            >
              {{
                new Date(blog.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            </span>
          </div>
        </div>

        <div class="p-6 flex-grow">
          <h3
            class="text-xl font-bold text-gray-100 mb-4 leading-snug group-hover:text-indigo-300 transition-colors"
          >
            {{ blog.title }}
          </h3>

          <p class="text-gray-400/90 mb-6 line-clamp-3 leading-relaxed">
            {{ blog.summary }}
          </p>

          <div class="mb-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in blog.tags"
                :key="tag"
                class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-indigo-300/80 hover:bg-indigo-900/30 transition-colors"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 mt-auto">
          <button
            @click="toggleBlog(blog.id)"
            class="w-full text-sm font-medium text-white bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-700 hover:to-purple-700 px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <span>Read Article</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <div v-if="blogs.length === 0" class="text-center py-24">
      <div
        class="mx-auto w-28 h-28 bg-gray-800/50 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-gray-700/30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 w-14 text-gray-600/50"
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
      <h3 class="text-2xl font-medium text-gray-200 mb-3">
        Content Coming Soon
      </h3>
      <p class="text-gray-500/80 max-w-md mx-auto leading-relaxed">
        I'm currently crafting some in-depth articles. Subscribe to be notified
        when new content arrives.
      </p>
      <button
        class="mt-6 text-sm font-medium text-indigo-400 hover:text-indigo-300 px-4 py-2 rounded-lg transition-colors"
      >
        Notify Me →
      </button>
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
    --tw-prose-links: theme(colors.indigo.300);
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

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  article {
    view-timeline-name: --item;
    view-timeline-axis: block;
    animation: fadeIn auto linear;
    animation-timeline: --item;
    animation-range: entry 10% cover 20%;
  }
</style>
