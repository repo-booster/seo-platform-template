<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Content ROI Optimization</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Use AI to analyze and optimize content performance and ROI.
      </p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Content Pieces"
          value="234"
          subtext="Being tracked"
          chart-type="circle"
          :percentage="78"
        />
        <MetricCard
          title="Avg. ROI"
          value="245%"
          subtext="Per content piece"
          chart-type="line"
          :data="[200, 210, 220, 230, 235, 240, 245]"
        />
        <MetricCard
          title="Optimization Score"
          value="85"
          subtext="Content quality"
          chart-type="line"
          :data="[75, 78, 80, 82, 83, 84, 85]"
        />
      </div>

      <!-- Top Performing Content Section -->
      <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
        <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-4">Top Performing Content</h2>
        <div class="space-y-4">
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">SEO Guide 2024</span>
            <span class="text-green-500">485% ROI</span>
          </div>
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">AI Marketing Tips</span>
            <span class="text-green-500">355% ROI</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
