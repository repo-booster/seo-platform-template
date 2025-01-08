<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <div class="mb-6">
        <h1 class="text-xl font-semibold mb-2">On Page SEO Checker</h1>
        <p class="text-gray-600">Get an exhaustive list of ideas based on competitive analysis that can improve the organic performance of your website.</p>
      </div>
      
      <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-4">
          <div class="flex-1">
            <input 
              v-model="domain"
              type="text" 
              placeholder="Enter domain" 
              class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button 
            @click="getIdeas"
            :disabled="loading"
            class="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 flex-shrink-0 disabled:opacity-50"
          >
            <template v-if="loading">
              <div class="flex items-center space-x-2">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyzing...</span>
              </div>
            </template>
            <span v-else>Get Ideas</span>
          </button>
          <button 
            @click="openSEOChecker"
            class="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 flex items-center space-x-2 flex-shrink-0"
          >
            <PlusIcon class="h-5 w-5" />
            <span>New SEO Check</span>
          </button>
        </div>

        <!-- Import Options -->
        <div class="flex space-x-2">
          <button 
            v-for="option in importOptions" 
            :key="option"
            @click="selectedImport = option"
            class="px-3 py-1 text-sm rounded-md"
            :class="selectedImport === option ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="showResults" class="bg-white p-6 rounded-lg shadow">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-lg font-medium">Analysis Results for {{ domain }}</h2>
          <p class="text-sm text-gray-600">Last updated: {{ new Date().toLocaleString() }}</p>
        </div>
        <div class="text-sm text-gray-600">
          Scheduled: {{ schedule === 'weekly' ? 'Weekly' : 'Never' }}
        </div>
      </div>

      <!-- Analysis Circle -->
      <div class="flex items-center justify-center mb-8">
        <div class="relative w-48 h-48">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              stroke-width="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#10b981"
              stroke-width="8"
              stroke-dasharray="283"
              :stroke-dashoffset="283 - (283 * 243/360)"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <div class="text-3xl font-bold">243</div>
            <div class="text-sm text-gray-600">Total Ideas</div>
          </div>
        </div>
      </div>

      <!-- Ideas Categories -->
      <div class="grid grid-cols-4 gap-6">
        <div v-for="category in ideaCategories" :key="category.name" class="p-4 border rounded-lg">
          <div class="flex items-center space-x-2 mb-2">
            <component :is="category.icon" class="h-5 w-5 text-gray-400" />
            <span class="font-medium">{{ category.name }}</span>
          </div>
          <div class="text-2xl font-bold">{{ category.count }}</div>
        </div>
      </div>
    </div>

    <!-- SEO Checker Modal -->
    <OnPageSEOModal 
      ref="seoModal" 
      @analysis-complete="handleAnalysisComplete"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  PlusIcon,
  LightBulbIcon,
  LinkIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

const domain = ref('')
const loading = ref(false)
const showResults = ref(false)
const seoModal = ref(null)
const selectedImport = ref('Auto Import')
const schedule = ref('weekly')

const importOptions = ['Auto Import', 'Manually', 'File', 'GSC', 'Organic Research']

const ideaCategories = [
  { name: 'Strategy Ideas', icon: LightBulbIcon, count: 7 },
  { name: 'Backlink Ideas', icon: LinkIcon, count: 23 },
  { name: 'Technical Ideas', icon: WrenchScrewdriverIcon, count: 71 },
  { name: 'Content Ideas', icon: DocumentTextIcon, count: 142 }
]

const getIdeas = async () => {
  if (!domain.value) return
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
  loading.value = false
  showResults.value = true
}

const openSEOChecker = () => {
  seoModal.value.show = true
}

const handleAnalysisComplete = (data) => {
  domain.value = data.domain
  schedule.value = data.schedule
  showResults.value = true
}
</script>