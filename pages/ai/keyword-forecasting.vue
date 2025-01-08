<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Real-Time Keyword and Traffic Forecasting</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Use machine learning models to predict keyword performance and traffic trends.
      </p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Forecast Accuracy"
          value="94.2%"
          subtext="Last 30 days"
          chart-type="circle"
          :percentage="94.2"
        />
        <MetricCard
          title="Predictions Made"
          value="15.3K"
          subtext="This month"
          chart-type="line"
          :data="[30, 40, 35, 50, 45, 60, 55]"
        />
        <MetricCard
          title="Active Models"
          value="5"
          subtext="ML models running"
          chart-type="line"
          :data="[3, 4, 4, 5, 5, 5, 5]"
        />
      </div>

      <!-- Keyword Trend Predictions -->
      <div class="space-y-6">
        <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-4">Keyword Trend Predictions</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-700 dark:text-gray-300">SEO Tools</span>
              <span class="text-green-500">↑ Rising trend</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-700 dark:text-gray-300">AI Marketing</span>
              <span class="text-green-500">↑ Rising trend</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-700 dark:text-gray-300">Content Strategy</span>
              <span class="text-yellow-500">→ Stable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
