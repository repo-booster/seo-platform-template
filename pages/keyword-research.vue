<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Keyword Overview</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Analyze keywords using your Search Console data and our keyword database.
      </p>

      <div class="flex flex-wrap gap-4">
        <div class="flex-1 min-w-[200px]">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Enter keywords separated by commas"
            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
          />
        </div>
        <div class="min-w-[200px]">
          <USelectMenu
            v-model="selectedCountry"
            :options="countries"
            option-attribute="name"
            searchable
            placeholder="Select country"
            class="w-full"
          >
            <template #option="{ option: country }">
              <div class="flex items-center gap-2">
                <UIcon :name="country.flag" class="flex-shrink-0 h-4 w-4" />
                <span>{{ country.name }}</span>
              </div>
            </template>
          </USelectMenu>
        </div>
        <button
          @click="analyzeKeywords"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
        >
          <template v-if="loading">
            <svg
              class="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Analyzing...</span>
          </template>
          <span v-else>Analyze</span>
        </button>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="keywords.length > 0" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-100">Search Console Keywords</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Keyword
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Page
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Clicks
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Impressions
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                CTR
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Position
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="keyword in keywords" :key="keyword.keyword">
              <td class="px-6 py-4 whitespace-nowrap">{{ keyword.keyword }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ keyword.page }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ keyword.clicks }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ keyword.impressions }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ (keyword.ctr * 100).toFixed(2) }}%</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ keyword.position.toFixed(1) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useKeywordResearch } from "~/composables/useKeywordResearch";

const searchQuery = ref("");
const selectedCountry = ref(null);
const { keywords, loading, analyzeKeywords } = useKeywordResearch();

const countries = [
  { name: "United States", flag: "i-flag-us" },
  { name: "United Kingdom", flag: "i-flag-gb" },
  { name: "Canada", flag: "i-flag-ca" },
  // Add more countries as needed
];
</script>
