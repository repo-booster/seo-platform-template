<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Backlink Analytics</h1>
      <p class="text-gray-600 mb-4">Analyze your backlink profile and discover new opportunities.</p>
      
      <div class="flex space-x-4">
        <div class="flex-1">
          <input 
            v-model="domain"
            type="text" 
            placeholder="Enter domain or URL" 
            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button 
          @click="analyzeDomain"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
        >
          <template v-if="loading">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Analyzing...</span>
          </template>
          <span v-else>Analyze</span>
        </button>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="results" class="bg-white p-6 rounded-lg shadow">
      <div class="grid grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Total Backlinks"
          :value="results.totalBacklinks.toLocaleString()"
          subtext="Active backlinks"
          chart-type="line"
          :data="[30, 40, 35, 50, 45, 60, 55]"
        />
        <MetricCard
          title="Unique Domains"
          :value="results.uniqueDomains.toLocaleString()"
          subtext="Linking domains"
          chart-type="line"
          :data="[25, 35, 45, 40, 50, 45, 55]"
        />
        <MetricCard
          title="Domain Authority"
          :value="results.domainAuthority"
          subtext="Out of 100"
          chart-type="circle"
          :percentage="results.domainAuthority"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBacklinks } from '~/composables/useBacklinks'

const { analyzeDomain: analyzeBacklinks } = useBacklinks()
const domain = ref('')
const loading = ref(false)
const results = ref(null)

const analyzeDomain = async () => {
  if (!domain.value) return
  
  loading.value = true
  try {
    const response = await analyzeBacklinks(domain.value)
    results.value = response.data.value
  } catch (error) {
    console.error('Error analyzing domain:', error)
  } finally {
    loading.value = false
  }
}
</script>