<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- Header Section -->
    <header class="max-w-5xl mx-auto p-6">
      <h1 class="text-4xl font-extrabold mb-4 text-center">Ask Me Anything About SEO</h1>
      <p class="text-center text-lg text-gray-600 dark:text-gray-400">
        On Page, Off Page, SEO Coding, Search Trends, We Do All The Hard Work For You
      </p>
    </header>

    <!-- Main Content -->
    <main class="max-w-5xl mx-auto p-6 space-y-8">
      <!-- Search Input Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <textarea
          v-model="userInput"
          class="w-full h-16 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 p-4"
          placeholder="Need help? Ask me anything..."
        ></textarea>
        <div class="flex justify-end mt-4">
          <button
            class="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600"
            @click="sendMessage"
          >
            Send
          </button>
        </div>
      </div>

      <!-- Suggested Actions -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <button
          v-for="(action, index) in actions"
          :key="index"
          class="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition"
        >
          {{ action }}
        </button>
      </div>

      <!-- Footer -->
      <footer class="text-center text-gray-500 dark:text-gray-400">
        <p>Start building your SEO into your code</p>
        <div class="flex justify-center mt-4 space-x-4">
          <div
            v-for="(icon, index) in techIcons"
            :key="index"
            class="bg-gray-200 dark:bg-gray-700 rounded-full p-2"
          >
            <component :is="icon" class="w-8 h-8 text-gray-600 dark:text-gray-300"></component>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/vue/24/solid";

const userInput = ref("");

const actions = [
  "Scan My Websites For Keywords",
  "Update keywords based on Google trends",
  "Update my SEO in code",
  "What keywords is [competitor] ranking for?",
  "Improve on-page SEO for URL",
  "Strategies competitors use for ranking",
];

const techIcons = [
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  ClipboardDocumentCheckIcon,
];

const sendMessage = () => {
  if (!userInput.value.trim()) return;
  alert(`Your query: ${userInput.value}`);
  userInput.value = "";
};
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}
</style>
