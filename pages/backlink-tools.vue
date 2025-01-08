<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-grey p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Backlink Analytics</h1>
      <p class="text-white-600 mb-4">Analyze your backlink profile and compare with competitors.</p>
      
      <!-- Main Domain Input -->
      <div class="flex space-x-4 mb-4">
        <div class="flex-1">
          <input 
            v-model="mainDomain"
            type="text" 
            placeholder="Enter your domain" 
            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button 
          @click="analyzeDomain(mainDomain)"
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

      <!-- Competitor Domains -->
      <div v-if="mainResults" class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-medium text-white-700">Compare with competitors</h3>
          <button 
            @click="addCompetitor"
            class="text-sm text-blue-600 hover:text-blue-700"
            :disabled="competitors.length >= 3"
          >
            + Add competitor
          </button>
        </div>
        
        <div v-for="(competitor, index) in competitors" :key="index" class="flex space-x-4">
          <div class="flex-1">
            <input 
              v-model="competitor.domain"
              type="text" 
              placeholder="Enter competitor domain" 
              class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button 
            @click="analyzeCompetitor(competitor.domain, index)"
            :disabled="competitor.loading"
            class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            <template v-if="competitor.loading">Analyzing...</template>
            <template v-else>Analyze</template>
          </button>
          <button 
            @click="removeCompetitor(index)"
            class="px-2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="mainResults || competitorResults.length > 0" class="space-y-6">
      <!-- Overview Metrics -->
      <div class="grid grid-cols-3 gap-6">
        <div v-for="domain in getAllResults" :key="domain.name" class="bg-grey p-6 rounded-lg shadow">
          <h3 class="font-medium mb-4">{{ domain.name }}</h3>
          <div class="space-y-4">
            <MetricCard
              title="Total Backlinks"
              :value="domain.data.totalBacklinks.toLocaleString()"
              subtext="Active backlinks"
              chart-type="line"
              :data="[30, 40, 35, 50, 45, 60, 55]"
            />
            <MetricCard
              title="Unique Domains"
              :value="domain.data.uniqueDomains.toLocaleString()"
              subtext="Linking domains"
              chart-type="line"
              :data="[25, 35, 45, 40, 50, 45, 55]"
            />
            <MetricCard
              title="Domain Authority"
              :value="domain.data.domainAuthority"
              subtext="Out of 100"
              chart-type="circle"
              :percentage="domain.data.domainAuthority"
            />
          </div>
        </div>
      </div>

      <!-- Comparison Chart -->
      <div v-if="competitorResults.length > 0" class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-medium mb-6">Backlink Comparison</h2>
        <div class="h-80">
          <!-- Add your preferred charting library here -->
          <div class="flex items-end h-full space-x-4">
            <div v-for="result in getAllResults" :key="result.name" 
                 class="flex-1 bg-blue-100 dark:bg-blue-900"
                 :style="{ height: `${(result.data.domainAuthority)}%` }">
              <div class="text-center p-2">
                <div class="font-medium">{{ result.name }}</div>
                <div class="text-sm text-gray-600">DA: {{ result.data.domainAuthority }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useBacklinks } from '~/composables/useBacklinks'

const { analyzeDomain: analyzeBacklinks, loading } = useBacklinks()

const mainDomain = ref('')
const mainResults = ref(null)
const competitors = ref([])
const competitorResults = ref([])

const getAllResults = computed(() => {
  const results = []
  if (mainResults.value) {
    results.push({
      name: mainDomain.value,
      data: mainResults.value
    })
  }
  competitorResults.value.forEach((result, index) => {
    if (result) {
      results.push({
        name: competitors.value[index].domain,
        data: result
      })
    }
  })
  return results
})

const analyzeDomain = async (domain) => {
  if (!domain) return
  const response = await analyzeBacklinks(domain)
  mainResults.value = response.data.value
}

const addCompetitor = () => {
  if (competitors.value.length < 3) {
    competitors.value.push({ domain: '', loading: false })
    competitorResults.value.push(null)
  }
}

const removeCompetitor = (index) => {
  competitors.value.splice(index, 1)
  competitorResults.value.splice(index, 1)
}

const analyzeCompetitor = async (domain, index) => {
  if (!domain) return
  competitors.value[index].loading = true
  try {
    const response = await analyzeBacklinks(domain)
    competitorResults.value[index] = response.data.value
  } finally {
    competitors.value[index].loading = false
  }
}
</script>