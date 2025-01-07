<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-2">Keyword Magic Tool</h1>
      <p class="text-gray-600 mb-4">Find millions of keyword suggestions for your SEO</p>
      
      <div class="flex space-x-4">
        <div class="flex-1">
          <div class="flex space-x-2">
            <div class="flex-1">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Enter keyword" 
                class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div class="w-40">
              <select v-model="selectedRegion" class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
            </div>
            <button 
              @click="searchKeywords"
              :disabled="loading"
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
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
    <div v-if="results.length > 0" class="bg-white p-6 rounded-lg shadow">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Search Volume</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPC</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="result in results" :key="result.keyword">
              <td class="px-6 py-4 whitespace-nowrap">{{ result.keyword }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ result.volume }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ result.difficulty }}</td>
              <td class="px-6 py-4 whitespace-nowrap">${{ result.cpc }}</td>
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