<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">AI-Driven Competitive Analysis</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Use AI to analyze competitor strategies and identify opportunities.
      </p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Competitors"
          value="15"
          subtext="Being tracked"
          chart-type="circle"
          :percentage="75"
        />
        <MetricCard
          title="Keywords"
          value="2.5K"
          subtext="Competitor targeting"
          chart-type="line"
          :data="[2000, 2200, 2300, 2400, 2500, 2450, 2500]"
        />
        <MetricCard
          title="Content Gaps"
          value="127"
          subtext="Opportunities found"
          chart-type="line"
          :data="[100, 110, 115, 120, 125, 127, 127]"
        />
      </div>

      <!-- Competitor Movements Section -->
      <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
        <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-4">Top Competitor Movements</h2>
        <div class="space-y-4">
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">competitor1.com</span>
            <span class="text-green-500">↑ 15 positions</span>
          </div>
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">competitor2.com</span>
            <span class="text-red-500">↓ 8 positions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
