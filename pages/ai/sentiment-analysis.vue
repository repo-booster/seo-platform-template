<template>
  <div class="space-y-6">
    <!-- Main Container -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <!-- Header -->
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Real-Time Sentiment Analysis</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Monitor and analyze brand mentions and sentiment across the web.
      </p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Brand Mentions"
          value="1,523"
          subtext="Last 24 hours"
          chart-type="circle"
          :percentage="85"
        />
        <MetricCard
          title="Sentiment Score"
          value="8.5"
          subtext="Out of 10"
          chart-type="line"
          :data="[7.8, 8.0, 8.2, 8.3, 8.4, 8.4, 8.5]"
        />
        <MetricCard
          title="Sources"
          value="45"
          subtext="Monitored sources"
          chart-type="line"
          :data="[35, 38, 40, 42, 43, 44, 45]"
        />
      </div>

      <!-- Sentiment Distribution Section -->
      <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
        <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-4">Sentiment Distribution</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Positive</span>
            <span class="text-green-500">75%</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Neutral</span>
            <span class="text-yellow-500">20%</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Negative</span>
            <span class="text-red-500">5%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
