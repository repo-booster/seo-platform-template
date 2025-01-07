<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Domain Overview</h1>
      <p class="text-gray-600 mb-4">Get a comprehensive analysis of any domain's online presence</p>
      
      <div class="flex space-x-4">
        <div class="flex-1">
          <input 
            v-model="domain"
            type="text" 
            placeholder="Enter domain, subdomain or URL" 
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
    <div v-if="results" class="space-y-6">
      <!-- Overview Metrics -->
      <div class="grid grid-cols-4 gap-6">
        <MetricCard
          title="Domain Authority"
          :value="results.authority.score.toString()"
          subtext="Out of 100"
          chart-type="circle"
          :percentage="results.authority.score"
        />
        <MetricCard
          title="Organic Traffic"
          :value="results.traffic.organic.toLocaleString()"
          subtext="Monthly visits"
          chart-type="line"
          :data="results.traffic.trend"
        />
        <MetricCard
          title="Backlinks"
          :value="results.backlinks.total.toLocaleString()"
          subtext="Total backlinks"
          chart-type="line"
          :data="results.backlinks.trend"
        />
        <MetricCard
          title="Keywords"
          :value="results.keywords.total.toLocaleString()"
          subtext="Ranking keywords"
          chart-type="line"
          :data="results.keywords.trend"
        />
      </div>

      <!-- Detailed Stats -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Traffic Sources -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-medium mb-4">Traffic Sources</h2>
          <div class="space-y-4">
            <div v-for="source in results.trafficSources" :key="source.name"
                 class="flex items-center justify-between">
              <div class="flex items-center">
                <component :is="source.icon" class="h-5 w-5 text-gray-400 mr-2" />
                <span>{{ source.name }}</span>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-gray-600">{{ source.percentage }}%</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" 
                       :style="{ width: source.percentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Keywords -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-medium mb-4">Top Keywords</h2>
          <div class="space-y-2">
            <div v-for="keyword in results.topKeywords" :key="keyword.term"
                 class="flex items-center justify-between">
              <span>{{ keyword.term }}</span>
              <div class="flex items-center space-x-4">
                <span class="text-gray-600">Position {{ keyword.position }}</span>
                <span :class="keyword.change > 0 ? 'text-green-600' : 'text-red-600'">
                  {{ keyword.change > 0 ? '+' : '' }}{{ keyword.change }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDomainOverview } from '~/composables/useDomainOverview'
import {
  GlobeAltIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  NewspaperIcon
} from '@heroicons/vue/24/outline'

const domain = ref('')
const { results, loading, analyzeDomain: analyze } = useDomainOverview()

const analyzeDomain = async () => {
  if (!domain.value) return
  await analyze(domain.value)
}
</script>