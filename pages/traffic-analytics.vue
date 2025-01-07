<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Traffic Analytics</h1>
      <p class="text-gray-600 mb-4">Analyze website traffic patterns and user behavior</p>
      
      <div class="flex space-x-4">
        <div class="w-40">
          <select v-model="selectedRegion" class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
            <option value="worldwide">Worldwide</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div class="flex-1">
          <input 
            v-model="domain"
            type="text" 
            placeholder="Enter domain" 
            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button 
          @click="analyzeTraffic"
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
    <div v-if="results" class="grid grid-cols-4 gap-6">
      <MetricCard
        title="Total Visits"
        :value="results.visits.toLocaleString()"
        subtext="Last 30 days"
        chart-type="line"
        :data="[30, 40, 35, 50, 45, 60, 55]"
      />
      <MetricCard
        title="Unique Visitors"
        :value="results.uniqueVisitors.toLocaleString()"
        subtext="Last 30 days"
        chart-type="line"
        :data="[25, 35, 45, 40, 50, 45, 55]"
      />
      <MetricCard
        title="Pages/Visit"
        :value="results.pagesPerVisit.toFixed(1)"
        subtext="Average"
        chart-type="line"
        :data="[3, 3.2, 2.8, 3.5, 3.3, 3.6, 3.4]"
      />
      <MetricCard
        title="Bounce Rate"
        :value="results.bounceRate + '%'"
        subtext="Site average"
        chart-type="circle"
        :percentage="results.bounceRate"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTrafficAnalytics } from '~/composables/useTrafficAnalytics'

const domain = ref('')
const selectedRegion = ref('worldwide')
const { results, loading, analyzeTraffic } = useTrafficAnalytics()
</script>