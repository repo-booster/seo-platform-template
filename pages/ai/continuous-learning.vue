<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">AI for Continuous Learning</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Leverage reinforcement learning to continuously improve SEO performance.
      </p>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Model Updates"
          value="1,234"
          subtext="This month"
          chart-type="circle"
          :percentage="92"
        />
        <MetricCard
          title="Learning Rate"
          value="0.15"
          subtext="Current rate"
          chart-type="line"
          :data="[0.1, 0.12, 0.13, 0.14, 0.15, 0.15, 0.15]"
        />
        <MetricCard
          title="Accuracy Gain"
          value="15%"
          subtext="This month"
          chart-type="line"
          :data="[5, 8, 10, 12, 13, 14, 15]"
        />
      </div>

      <!-- Recent Learnings Section -->
      <div class="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
        <h2 class="font-medium text-gray-800 dark:text-gray-100 mb-4">Recent Learnings</h2>
        <div class="space-y-4">
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">Content Optimization</span>
            <span class="text-green-500">+12% accuracy</span>
          </div>
          <div 
            class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition">
            <span class="text-gray-800 dark:text-gray-100">Keyword Prediction</span>
            <span class="text-green-500">+8% accuracy</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
