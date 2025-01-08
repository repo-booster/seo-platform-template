<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Conversion Attribution with AI</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Use machine learning to attribute conversions to specific SEO efforts.
      </p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Tracked Conversions"
          value="1,234"
          subtext="This month"
          chart-type="circle"
          :percentage="82"
        />
        <MetricCard
          title="Attribution Accuracy"
          value="95.5%"
          subtext="Model confidence"
          chart-type="line"
          :data="[92, 93, 94, 94, 95, 95, 95.5]"
        />
        <MetricCard
          title="Revenue Attributed"
          value="$45.2K"
          subtext="This month"
          chart-type="line"
          :data="[35, 38, 40, 42, 43, 44, 45.2]"
        />
      </div>

      <!-- Channel Attribution Section -->
      <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
        <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-4">Channel Attribution</h2>
        <div class="space-y-4">
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">Organic Search</span>
            <span class="text-blue-600 dark:text-blue-400">45%</span>
          </div>
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">Direct</span>
            <span class="text-green-600 dark:text-green-400">30%</span>
          </div>
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">Referral</span>
            <span class="text-yellow-600 dark:text-yellow-400">25%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
