<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Keyword Magic Tool</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">Find millions of keyword suggestions for your SEO</p>
      
      <div class="flex space-x-4">
        <div class="flex-1">
          <div class="flex space-x-2">
            <div class="flex-1">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Enter keyword" 
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              />
            </div>
            <div class="w-40">
              <select 
                v-model="selectedRegion" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              >
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
            </div>
            <button 
              @click="searchKeywords"
              :disabled="loading"
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 flex items-center space-x-2"
            >
              <template v-if="loading">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Searching...</span>
              </template>
              <span v-else>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="results.length > 0" class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Keyword</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Search Volume</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Difficulty</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">CPC</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="result in results" :key="result.keyword" class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{{ result.keyword }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{{ result.volume }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{{ result.difficulty }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">${{ result.cpc }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useKeywordMagic } from '~/composables/useKeywordMagic'

const searchQuery = ref('')
const selectedRegion = ref('us')
const { results, loading, searchKeywords } = useKeywordMagic()
</script>
