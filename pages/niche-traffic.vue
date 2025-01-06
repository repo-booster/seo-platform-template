<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Industry Traffic Analytics</h1>
      <p class="text-gray-600 mb-6">Analyze traffic patterns across different industries and regions</p>

      <!-- Search Controls -->
      <div class="space-y-4">
        <div class="flex space-x-4">
          <!-- Region Selection -->
          <div class="w-64">
            <USelectMenu
              v-model="selectedRegion"
              :options="regions"
              option-attribute="name"
              searchable
              placeholder="Select region"
              class="w-full"
            >
              <template #option="{ option: region }">
                <div class="flex items-center gap-2">
                  <UIcon :name="region.flag" class="flex-shrink-0 h-4 w-4" />
                  <span>{{ region.name }}</span>
                </div>
              </template>
              <template #selected-option="{ option: region }">
                <div class="flex items-center gap-2">
                  <UIcon :name="region.flag" class="flex-shrink-0 h-4 w-4" />
                  <span>{{ region.name }}</span>
                </div>
              </template>
            </USelectMenu>
          </div>

          <!-- Industry Selection -->
          <div class="flex-1">
            <USelectMenu
              v-model="selectedIndustry"
              :options="industries"
              option-attribute="name"
              searchable
              placeholder="Select industry"
              class="w-full"
            >
              <template #option="{ option: industry }">
                <div class="flex items-center gap-2">
                  <component :is="industry.icon" class="h-5 w-5 text-gray-400" />
                  <span>{{ industry.name }}</span>
                </div>
              </template>
            </USelectMenu>
          </div>

          <button class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Analyze
          </button>
        </div>

        <!-- Time Range -->
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600">Time Range:</span>
          <div class="flex space-x-2">
            <button 
              v-for="range in timeRanges" 
              :key="range.value"
              @click="selectedTimeRange = range.value"
              class="px-3 py-1 text-sm rounded-md"
              :class="selectedTimeRange === range.value ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'"
            >
              {{ range.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Traffic Overview -->
    <div class="grid grid-cols-4 gap-6">
      <MetricCard
        title="Total Traffic"
        value="2.4M"
        subtext="+12.3% vs last period"
        chart-type="line"
        :data="[30, 40, 35, 50, 45, 60, 55]"
      />
      <MetricCard
        title="Avg. Visit Duration"
        value="4m 12s"
        subtext="+5.2% vs last period"
        chart-type="line"
        :data="[20, 25, 30, 25, 35, 40, 35]"
      />
      <MetricCard
        title="Pages per Visit"
        value="3.2"
        subtext="-2.1% vs last period"
        chart-type="line"
        :data="[40, 35, 45, 40, 50, 45, 55]"
      />
      <MetricCard
        title="Bounce Rate"
        value="42.3%"
        subtext="-1.5% vs last period"
        chart-type="circle"
        :percentage="42.3"
      />
    </div>

    <!-- Traffic Sources -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium mb-6">Top Traffic Sources</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traffic Share</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Visits</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="source in trafficSources" :key="source.domain">
              <td class="px-6 py-4 whitespace-nowrap">{{ source.domain }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ source.share }}%</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ source.visits }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="source.change > 0 ? 'text-green-600' : 'text-red-600'">
                  {{ source.change > 0 ? '+' : '' }}{{ source.change }}%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ShoppingBagIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  HeartIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  FilmIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  HomeIcon
} from '@heroicons/vue/24/outline'

const selectedRegion = ref({ name: 'Worldwide', flag: 'i-flag-un' })
const selectedIndustry = ref(null)
const selectedTimeRange = ref('30d')

const regions = [
  { name: 'Worldwide', flag: 'i-flag-un' },
  { name: 'United States', flag: 'i-flag-us' },
  { name: 'United Kingdom', flag: 'i-flag-gb' },
  { name: 'Germany', flag: 'i-flag-de' },
  { name: 'France', flag: 'i-flag-fr' },
  { name: 'Japan', flag: 'i-flag-jp' },
  { name: 'Australia', flag: 'i-flag-au' }
]

const industries = [
  { name: 'E-commerce', icon: ShoppingBagIcon },
  { name: 'Education', icon: AcademicCapIcon },
  { name: 'Business Services', icon: BuildingOfficeIcon },
  { name: 'Healthcare', icon: HeartIcon },
  { name: 'Finance', icon: CurrencyDollarIcon },
  { name: 'Technology', icon: DevicePhoneMobileIcon },
  { name: 'Entertainment', icon: FilmIcon },
  { name: 'Industrial', icon: WrenchScrewdriverIcon },
  { name: 'Logistics', icon: TruckIcon },
  { name: 'Real Estate', icon: HomeIcon }
]

const timeRanges = [
  { label: '7 days', value: '7d' },
  { label: '30 days', value: '30d' },
  { label: '3 months', value: '3m' },
  { label: '6 months', value: '6m' },
  { label: '12 months', value: '12m' }
]

const trafficSources = [
  { domain: 'amazon.com', share: 15.2, visits: '1.2M', change: 5.3 },
  { domain: 'walmart.com', share: 8.4, visits: '680K', change: -2.1 },
  { domain: 'target.com', share: 6.7, visits: '540K', change: 3.8 },
  { domain: 'bestbuy.com', share: 4.9, visits: '395K', change: 1.2 },
  { domain: 'ebay.com', share: 4.2, visits: '340K', change: -0.8 }
]
</script>