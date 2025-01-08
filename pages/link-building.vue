<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Link Building Tool</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        A powerful tool to quickly and easily build backlinks
      </p>

      <div class="flex space-x-4">
        <div class="flex-1">
          <input 
            v-model="domain"
            type="text" 
            placeholder="Enter domain" 
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button 
          @click="analyzeLinks"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
        >
          <template v-if="loading">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Analyzing</span>
          </template>
          <span v-else>Analyze</span>
        </button>
      </div>
    </div>

    <!-- Analysis Results Section -->
    <div v-if="results" class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-100">Analysis Results</h2>
      <div class="grid grid-cols-2 gap-6">
        <MetricCard
          title="Total Backlinks"
          :value="results.totalBacklinks"
          subtext="All active links"
          chart-type="line"
          :data="[30, 40, 35, 50, 45, 60, 55]"
        />
        <MetricCard
          title="Referring Domains"
          :value="results.referringDomains"
          subtext="Unique domains"
          chart-type="circle"
          :percentage="results.domainPercentage"
        />
        <MetricCard
          title="Spam Score"
          :value="results.spamScore + '%'"
          subtext="Based on link quality"
          chart-type="line"
          :data="[5, 10, 8, 12, 9, 15, 10]"
        />
        <MetricCard
          title="Anchor Text Variations"
          :value="results.anchorTextVariations"
          subtext="Unique anchor texts"
          chart-type="bar"
          :data="[12, 15, 10, 18, 16, 14, 19]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const domain = ref('')
const results = ref(null)

const analyzeLinks = async () => {
  if (!domain.value) return alert('Please enter a domain')

  loading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    results.value = {
      totalBacklinks: '12.3K',
      referringDomains: '480',
      domainPercentage: 78,
      spamScore: 5,
      anchorTextVariations: 120
    }
  } catch (error) {
    console.error('Error analyzing links:', error)
    alert('An error occurred while analyzing links')
  } finally {
    loading.value = false
  }
}
</script>
