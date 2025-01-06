<template>
  <div class="space-y-6">
    <!-- Categories List -->
    <div class="bg-white p-6 rounded-lg shadow">
      <div class="flex space-x-6">
        <!-- Left Categories Column -->
        <div class="w-64 space-y-2">
          <div class="flex justify-between items-center p-2 hover:bg-gray-50 cursor-pointer">
            <span>All Categories</span>
            <span class="text-orange-500 font-medium">7.9</span>
          </div>
          <div class="flex justify-between items-center p-2 hover:bg-gray-50 cursor-pointer">
            <span>Arts & Entertainment</span>
            <span class="text-orange-500 font-medium">9.2</span>
          </div>
          <div class="flex justify-between items-center p-2 hover:bg-gray-50 cursor-pointer">
            <span>Autos & Vehicles</span>
            <span class="text-orange-500 font-medium">8.8</span>
          </div>
          <!-- Add more categories... -->
        </div>

        <!-- Right Content Area -->
        <div class="flex-1">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-2">
              <select class="px-3 py-1 border rounded text-sm">
                <option>United States</option>
              </select>
              <div class="flex items-center space-x-2">
                <button class="px-3 py-1 bg-gray-100 text-sm rounded flex items-center">
                  <ComputerDesktopIcon class="h-4 w-4 mr-1" />
                  Desktop
                </button>
                <button class="px-3 py-1 text-sm rounded flex items-center">
                  <DevicePhoneMobileIcon class="h-4 w-4 mr-1" />
                  Mobile
                </button>
              </div>
            </div>
            <button class="text-sm text-gray-600">Share</button>
          </div>

          <!-- SERP Volatility Chart -->
          <div class="mb-8">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h2 class="font-medium">SERP volatility for the last 30 days</h2>
                <p class="text-sm text-gray-500">All categories</p>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-500">High range</div>
                <div class="text-4xl font-bold text-orange-500">7.9<span class="text-sm">/10</span></div>
              </div>
            </div>
            <div class="h-64 relative">
              <LineChart :data="volatilityData" />
            </div>
          </div>

          <!-- SERP Features Table -->
          <div>
            <h2 class="font-medium mb-4">SERP Features Occurrence</h2>
            <p class="text-sm text-gray-500 mb-4">Percentage of SERPs where this feature appears in top 20 results</p>
            <div class="grid grid-cols-2 gap-x-8 gap-y-2">
              <div v-for="feature in serpFeatures" :key="feature.name"
                   class="flex justify-between items-center py-2">
                <div class="flex items-center space-x-2">
                  <component :is="feature.icon" class="h-5 w-5 text-gray-400" />
                  <span class="text-sm">{{ feature.name }}</span>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="text-sm">{{ feature.percentage }}%</span>
                  <span :class="[
                    feature.change > 0 ? 'text-green-500' : 'text-red-500',
                    'text-sm w-12 text-right'
                  ]">{{ feature.change > 0 ? '+' : ''}}{{ feature.change }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Updates Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="font-medium mb-4">Recent Google Updates</h2>
      <p class="text-sm text-gray-500 mb-4">Updates for the last 30 days</p>
      <div class="space-y-4">
        <div>
          <h3 class="font-medium">Released the December 2024 spam update</h3>
          <p class="text-sm text-gray-600">It applies globally and to all languages. The rollout may take up to 1 week to complete.</p>
        </div>
        <div>
          <h3 class="font-medium">Google released the December 2024 core update. It will take about 2 weeks to fully roll out.</h3>
        </div>
        <button class="text-sm text-blue-600">See all Google Updates</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  StarIcon,
  PhotoIcon,
  NewspaperIcon,
  MapIcon,
  VideoCameraIcon,
  ShoppingCartIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  SparklesIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

const volatilityData = ref([3, 4, 5, 7, 6, 8, 7.9])

const serpFeatures = ref([
  { name: 'Featured snippet', icon: StarIcon, percentage: 3.97, change: 0.38 },
  { name: 'Statistics', icon: ChartBarIcon, percentage: 72.77, change: 0.14 },
  { name: 'AI Overview', icon: SparklesIcon, percentage: 6.42, change: 0.58 },
  { name: 'Reviews', icon: StarIcon, percentage: 56.06, change: 0.39 },
  { name: 'Instant answer', icon: LightBulbIcon, percentage: 2.69, change: 0.08 },
  { name: 'News', icon: NewspaperIcon, percentage: 0.01, change: -0.01 },
  { name: 'Image', icon: PhotoIcon, percentage: 49.67, change: -0.42 },
  { name: 'Image pack', icon: PhotoIcon, percentage: 50.37, change: -0.87 },
  { name: 'Video', icon: VideoCameraIcon, percentage: 19.62, change: -0.26 },
  { name: 'Featured video', icon: VideoCameraIcon, percentage: 0, change: -0.01 },
  { name: 'Video carousel', icon: VideoCameraIcon, percentage: 5.10, change: 0.02 },
  { name: 'People also ask', icon: QuestionMarkCircleIcon, percentage: 57.38, change: -0.25 },
  { name: 'Local pack', icon: MapIcon, percentage: 17.63, change: -0.29 },
  { name: 'Knowledge panel', icon: DocumentTextIcon, percentage: 20.55, change: 0.19 }
])
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
}
</style>