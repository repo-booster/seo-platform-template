<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Automated Reporting and Alerts</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">AI-powered reporting and real-time alerts for SEO performance.</p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Active Reports"
          value="12"
          subtext="Automated reports"
          chart-type="circle"
          :percentage="80"
        />
        <MetricCard
          title="Alert Rules"
          value="25"
          subtext="Monitoring rules"
          chart-type="line"
          :data="[20, 21, 22, 23, 24, 25, 25]"
        />
        <MetricCard
          title="Accuracy"
          value="99.2%"
          subtext="Report accuracy"
          chart-type="line"
          :data="[98, 98.5, 98.7, 98.9, 99, 99.1, 99.2]"
        />
      </div>

      <!-- Recent Alerts Section -->
      <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
        <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-4">Recent Alerts</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-gray-800 dark:text-gray-100">Ranking Drop Alert</span>
            <span class="text-red-500">2 hours ago</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-800 dark:text-gray-100">Traffic Spike Alert</span>
            <span class="text-green-500">5 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
