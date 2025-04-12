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
    // Add a small delay to enable transition effects
    setTimeout(() => {
      isLoaded.value = true;
    }, 100);
  });
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <div class="flex flex-col items-start mb-12">
      <h1 class="text-4xl font-bold text-gray-200 mb-3 relative">
        My Blog
        <!-- <span class="absolute bottom-0 left-0 w-20 h-1 bg-indigo-600"></span> -->
      </h1>
      <p class="text-gray-300 mt-4 max-w-2xl">
        Thoughts, insights, and updates about my journey in technology and
        development.
      </p>
    </div>

    <!-- Remove debug output -->

    <!-- Single blog -->
    <div
      v-if="expandedBlogId"
      class="fixed top-[70px] left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
      @click.self="expandedBlogId = null"
    >
      <div
        class="bg-white rounded-xl p-8 w-full max-w-5xl shadow-xl relative transition-all duration-300 overflow-y-auto mx-auto my-20"
      >
        <button
          @click="expandedBlogId = null"
          class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            {{ blog.title }}
          </h2>
          <p class="text-gray-500 text-sm mb-4">
            {{
              new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
          <div class="prose max-w-none text-gray-700 whitespace-pre-wrap">
            {{ blog.content }}
          </div>
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tag in blog.tags"
              :key="tag"
              class="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- /------- -->

    <!-- Blog Posts -->

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="blog in blogs"
        :key="blog.id"
        class="bg-stone-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform flex flex-col h-full"
        :class="{
          'opacity-0 translate-y-4': !isLoaded,
          'opacity-100 translate-y-0': isLoaded,
        }"
        :style="{
          transitionDelay: isLoaded ? `${blogs.indexOf(blog) * 100}ms` : '0ms',
        }"
      >
        <div class="p-6 flex-grow">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold text-gray-900">
              {{ blog.title }}
            </h2>
            <div class="w-2 h-2 rounded-full bg-indigo-600"></div>
          </div>

          <p class="text-gray-500 text-sm mb-3">
            {{
              new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>

          <p
            v-if="expandedBlogId !== blog.id"
            class="text-gray-600 mb-6 line-clamp-3"
          >
            {{ blog.summary }}
          </p>
          <div v-else class="mb-6">
            <p class="text-gray-600 mb-4">{{ blog.summary }}</p>
            <div class="prose prose-indigo max-w-none">
              <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {{ blog.content }}
              </p>
            </div>
          </div>

          <div class="mb-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in blog.tags"
                :key="tag"
                class="bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 mt-auto">
          <div class="flex gap-4">
            <button
              @click="toggleBlog(blog.id)"
              class="text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 px-4 py-2 rounded-md font-medium flex-grow text-center transition-colors duration-300 shadow-sm"
            >
              {{ expandedBlogId === blog.id ? "Show Less" : "Read More" }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state when no blog posts -->
    <div v-if="blogs.length === 0" class="text-center py-16">
      <div class="text-gray-400 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 mx-auto"
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
      <h3 class="text-xl font-medium text-gray-700">No blog posts yet</h3>
      <p class="text-gray-500 mt-2">Blog posts you add will appear here.</p>
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
</style>
