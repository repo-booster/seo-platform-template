<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Industry Traffic Analytics</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">Analyze traffic patterns across different industries and regions</p>

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
                  <component :is="industry.icon" class="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <span>{{ industry.name }}</span>
                </div>
              </template>
            </USelectMenu>
          </div>

          <button class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            Analyze
          </button>
        </div>

        <!-- Time Range -->
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600 dark:text-gray-300">Time Range:</span>
          <div class="flex space-x-2">
            <button 
              v-for="range in timeRanges" 
              :key="range.value"
              @click="selectedTimeRange = range.value"
              class="px-3 py-1 text-sm rounded-md"
              :class="selectedTimeRange === range.value 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'"
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
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium mb-6 text-gray-800 dark:text-gray-100">Top Traffic Sources</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Domain</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Traffic Share</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Monthly Visits</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="source in trafficSources" :key="source.domain" class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{{ source.domain }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{{ source.share }}%</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">{{ source.visits }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="source.change > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">
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
