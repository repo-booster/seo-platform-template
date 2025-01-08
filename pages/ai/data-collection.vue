<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">AI-Powered Data Collection and Analysis</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Leverage advanced AI technologies to collect and analyze SEO data in real-time.
      </p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Active Data Sources"
          value="15"
          subtext="Connected APIs"
          chart-type="circle"
          :percentage="75"
        />
        <MetricCard
          title="Data Points"
          value="1.2M"
          subtext="Collected today"
          chart-type="line"
          :data="[30, 40, 35, 50, 45, 60, 55]"
        />
        <MetricCard
          title="Analysis Speed"
          value="2.3s"
          subtext="Average processing time"
          chart-type="line"
          :data="[25, 35, 45, 40, 50, 45, 55]"
        />
      </div>

      <!-- Additional Information Sections -->
      <div class="space-y-6">
        <!-- Web Scraping Status -->
        <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-2">Web Scraping Status</h2>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 rounded-full bg-green-500"></div>
            <span class="text-gray-700 dark:text-gray-300">Active - Processing competitor data</span>
          </div>
        </div>

        <!-- Connected APIs -->
        <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-2">Connected APIs</h2>
          <div class="space-y-2">
            <div class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
              <span class="text-gray-700 dark:text-gray-300">Google Search Console</span>
              <span class="text-green-500">Connected</span>
            </div>
            <div class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
              <span class="text-gray-700 dark:text-gray-300">Google Analytics</span>
              <span class="text-green-500">Connected</span>
            </div>
            <div class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
              <span class="text-gray-700 dark:text-gray-300">Ahrefs API</span>
              <span class="text-yellow-500">Connecting...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
