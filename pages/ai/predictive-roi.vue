<template>
  <div class="space-y-6">
    <!-- Main Container -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <!-- Header -->
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Predictive ROI Modeling</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Use machine learning to predict SEO campaign ROI and optimize investments.
      </p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Predicted ROI"
          value="324%"
          subtext="Next quarter"
          chart-type="circle"
          :percentage="85"
        />
        <MetricCard
          title="Investment"
          value="$12.5K"
          subtext="Recommended"
          chart-type="line"
          :data="[10, 12, 11, 13, 12, 14, 12.5]"
        />
        <MetricCard
          title="Confidence"
          value="92%"
          subtext="Prediction accuracy"
          chart-type="line"
          :data="[88, 90, 89, 91, 90, 92, 92]"
        />
      </div>

      <!-- Campaign Predictions Section -->
      <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
        <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-4">Campaign Predictions</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Content Marketing</span>
            <span class="text-green-500">285% ROI</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Link Building</span>
            <span class="text-green-500">195% ROI</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Technical SEO</span>
            <span class="text-yellow-500">145% ROI</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
