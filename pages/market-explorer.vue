<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Market Explorer</h1>
      <p class="text-gray-600 mb-4">Analyze any market and benchmark yourself against competitors</p>

      <!-- Market Analysis Form -->
      <div class="space-y-4">
        <!-- Domain Search -->
        <div class="flex space-x-4">
          <div class="flex-1">
            <input 
              v-model="domain"
              type="text" 
              placeholder="Enter your domain to analyze" 
              class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button 
            @click="analyzeDomain"
            :disabled="domainLoading"
            class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
          >
            <template v-if="domainLoading">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Analyzing Domain</span>
            </template>
            <span v-else>Analyze Domain</span>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Industry</label>
            <select v-model="selectedIndustry" class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select industry</option>
              <option v-for="industry in industries" :key="industry.id" :value="industry.id">
                {{ industry.name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Region</label>
            <select v-model="selectedRegion" class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="worldwide">Worldwide</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="eu">European Union</option>
            </select>
          </div>
        </div>

        <button 
          @click="analyzeMarket"
          :disabled="loading"
          class="w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          <template v-if="loading">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Analyzing Market</span>
          </template>
          <span v-else>Analyze Market</span>
        </button>
      </div>
    </div>

    <!-- Domain Analysis Results -->
    <div v-if="domainResults" class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium mb-4">Domain Analysis</h2>
      <div class="grid grid-cols-4 gap-6">
        <MetricCard
          title="Market Share"
          :value="domainResults.marketShare + '%'"
          subtext="Of total market"
          chart-type="circle"
          :percentage="domainResults.marketShare"
        />
        <MetricCard
          title="Traffic"
          :value="domainResults.traffic"
          subtext="Monthly visits"
          chart-type="line"
          :data="[30, 40, 35, 50, 45, 60, 55]"
        />
        <MetricCard
          title="Growth"
          :value="domainResults.growth + '%'"
          subtext="Year over year"
          chart-type="line"
          :data="[25, 35, 45, 40, 50, 45, 55]"
        />
        <MetricCard
          title="Market Position"
          :value="domainResults.position"
          subtext="Rank in market"
          chart-type="line"
          :data="[20, 25, 30, 28, 35, 40, 38]"
        />
      </div>
    </div>

    <!-- Market Results Section -->
    <div v-if="results" class="space-y-6">
      <!-- Rest of the existing results section... -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const domainLoading = ref(false)
const domain = ref('')
const selectedIndustry = ref('')
const selectedRegion = ref('worldwide')
const results = ref(null)
const domainResults = ref(null)

const industries = [
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'saas', name: 'SaaS' },
  { id: 'finance', name: 'Finance' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'education', name: 'Education' },
  { id: 'retail', name: 'Retail' }
]

const analyzeDomain = async () => {
  if (!domain.value) return
  
  domainLoading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    domainResults.value = {
      marketShare: 15,
      traffic: '850K',
      growth: 12,
      position: '#3'
    }
  } finally {
    domainLoading.value = false
  }
}

const analyzeMarket = async () => {
  if (!selectedIndustry.value) return
  
  loading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    results.value = {
      marketSize: '$4.5B',
      growthRate: 12.5,
      totalCompanies: '2,450',
      potential: 'High',
      potentialScore: 85,
      leaders: [
        { name: 'Company A', marketShare: 25, growth: 15, traffic: '1.2M' },
        { name: 'Company B', marketShare: 18, growth: 8, traffic: '950K' },
        { name: 'Company C', marketShare: 15, growth: -2, traffic: '780K' },
        { name: 'Company D', marketShare: 12, growth: 5, traffic: '620K' }
      ]
    }
  } finally {
    loading.value = false
  }
}
</script>