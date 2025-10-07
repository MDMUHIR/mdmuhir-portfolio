<script setup>
import { useBlogs } from "@/composables/blogs";
import { ref, onMounted } from "vue";

const { blog, blogs, getBlogById } = useBlogs();

const isLoaded = ref(false);
const expandedBlogId = ref(null);

const toggleBlog = (blogId) => {
  expandedBlogId.value = expandedBlogId.value === blogId ? null : blogId;
  if (expandedBlogId.value) getBlogById(blogId);
};

onMounted(() => {
  setTimeout(() => (isLoaded.value = true), 150);
});
</script>

<template>
  <div class="main py-8 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-10">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-100 mb-2">
        Latest Insights & Ideas
      </h1>
      <p class="text-gray-400 text-lg">
        Explore thoughts, experiments, and reflections — just like a LinkedIn
        feed.
      </p>
    </div>

    <!-- Blog Feed -->
    <div class="space-y-8">
      <article
        v-for="(b, index) in blogs"
        :key="b.id"
        class="bg-gray-900 border border-gray-800 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-700 transition-all duration-300 p-6"
        :class="{
          'opacity-0 translate-y-3': !isLoaded,
          'opacity-100 translate-y-0': isLoaded,
        }"
        :style="{ transitionDelay: isLoaded ? `${index * 70}ms` : '0ms' }"
      >
        <!-- Post Header -->
        <div class="flex items-center gap-3 mb-4">
          <img
            src="https://ui-avatars.com/api/?name=Md+Muhir+Uddin&background=374151&color=f3f4f6"
            alt="Author"
            class="w-10 h-10 rounded-full border border-gray-700"
          />
          <div>
            <h3 class="text-white font-semibold text-sm">Md. Muhir Uddin</h3>
            <p class="text-xs text-gray-400">
              {{
                new Date(b.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
              • {{ Math.ceil(b.content.length / 1200) }} min read
            </p>
          </div>
        </div>

        <!-- Post Content -->
        <div class="space-y-3">
          <h2
            class="text-lg font-semibold text-gray-100 leading-snug cursor-pointer hover:text-red-400 transition"
            @click="toggleBlog(b.id)"
          >
            {{ b.title }}
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {{ b.summary }}
          </p>

          <!-- Optional Image -->
          <div
            v-if="b.image"
            class="rounded-xl overflow-hidden mt-4 border border-gray-800"
          >
            <img
              :src="b.image"
              :alt="b.title"
              class="w-full max-h-72 object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in b.tags"
            :key="tag"
            class="bg-gray-800 text-red-300 text-xs px-3 py-1 rounded-full font-medium"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- Interactions -->
        <div
          class="flex items-center justify-between mt-5 border-t border-gray-800 pt-4 text-gray-400 text-sm"
        >
          <div class="flex items-center gap-6">
            <button
              class="flex items-center gap-1 hover:text-red-400 transition"
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
                  d="M5 15l7-7 7 7"
                />
              </svg>
              Like
            </button>
            <button
              class="flex items-center gap-1 hover:text-red-400 transition"
            >
              💬 Comment
            </button>
            <button
              class="flex items-center gap-1 hover:text-red-400 transition"
            >
              ↗ Share
            </button>
          </div>
          <button
            @click="toggleBlog(b.id)"
            class="text-xs bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1.5 rounded-lg hover:from-red-700 hover:to-orange-700 transition"
          >
            Read More →
          </button>
        </div>
      </article>
    </div>

    <!-- Blog Modal -->
    <transition name="fade-scale" mode="out-in">
      <div
        v-if="expandedBlogId"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto p-6"
        @click.self="expandedBlogId = null"
      >
        <div
          class="relative bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
        >
          <button
            @click="expandedBlogId = null"
            class="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/70 hover:bg-gray-700 p-2 rounded-lg transition"
          >
            ✕
          </button>

          <div v-if="blog.image" class="h-64 overflow-hidden">
            <img
              :src="blog.image"
              :alt="blog.title"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-8 space-y-6">
            <div class="flex items-center gap-3 text-sm">
              <img
                src="https://ui-avatars.com/api/?name=Md+Muhir+Uddin&background=374151&color=f3f4f6"
                alt="Author"
                class="w-10 h-10 rounded-full border border-gray-700"
              />
              <div>
                <p class="text-white font-semibold text-sm">Md. Muhir Uddin</p>
                <p class="text-xs text-gray-400">
                  {{
                    new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  }}
                </p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white leading-tight">
              {{ blog.title }}
            </h2>

            <p class="text-gray-400 text-lg">{{ blog.summary }}</p>

            <div class="text-gray-300 whitespace-pre-wrap leading-relaxed">
              {{ blog.content }}
            </div>

            <div class="pt-6 border-t border-gray-800">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in blog.tags"
                  :key="tag"
                  class="bg-gray-800 text-red-300 text-xs px-3 py-1 rounded-full font-medium"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Empty State -->
    <div v-if="blogs.length === 0" class="text-center py-20">
      <h3 class="text-2xl font-semibold text-gray-200 mb-2">No posts yet.</h3>
      <p class="text-gray-500">
        Your thoughts and ideas will appear here soon.
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

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
