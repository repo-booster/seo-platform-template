<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-8 rounded-lg shadow">
      <h1 class="text-3xl font-bold mb-2">Voice & Visual Search Insights</h1>
      <p class="text-lg text-gray-100">
        Gain actionable insights to optimize for voice and visual search performance.
      </p>
    </div>

    <!-- Metrics Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MetricCard
        title="Voice Queries"
        value="2,345"
        subtext="This month"
        chart-type="circle"
        :percentage="78"
      />
      <MetricCard
        title="Visual Searches"
        value="1,234"
        subtext="This month"
        chart-type="line"
        :data="[1000, 1050, 1100, 1150, 1200, 1220, 1234]"
      />
      <MetricCard
        title="Optimization Score"
        value="88%"
        subtext="Voice/Visual SEO"
        chart-type="line"
        :data="[82, 83, 84, 85, 86, 87, 88]"
      />
    </div>

    <!-- Insights Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Top Voice Queries -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold mb-4">Top Voice Queries</h2>
        <ul class="space-y-4">
          <li class="flex items-center justify-between">
            <span class="text-gray-800">"How to optimize for voice search"</span>
            <span class="text-green-600 font-medium">125 searches</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-gray-800">"Best SEO tools 2024"</span>
            <span class="text-green-600 font-medium">98 searches</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-gray-800">"Local SEO for voice"</span>
            <span class="text-green-600 font-medium">87 searches</span>
          </li>
        </ul>
      </div>

      <!-- Top Visual Searches -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold mb-4">Top Visual Search Trends</h2>
        <ul class="space-y-4">
          <li class="flex items-center justify-between">
            <span class="text-gray-800">"Visual shopping for electronics"</span>
            <span class="text-blue-600 font-medium">342 searches</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-gray-800">"Home decor visual ideas"</span>
            <span class="text-blue-600 font-medium">289 searches</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-gray-800">"Visual search for recipes"</span>
            <span class="text-blue-600 font-medium">201 searches</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Optimization Tips -->
    <div class="bg-gray-50 p-6 rounded-lg shadow space-y-4">
      <h2 class="text-lg font-semibold mb-4">Optimization Tips for Voice and Visual Search</h2>
      <ul class="list-disc list-inside space-y-2">
        <li class="text-gray-700">
          Use structured data to ensure your content is easily indexable.
        </li>
        <li class="text-gray-700">
          Optimize for natural language queries to target voice searches.
        </li>
        <li class="text-gray-700">
          Provide high-quality images with descriptive alt tags for visual search.
        </li>
        <li class="text-gray-700">
          Leverage Google Lens and similar platforms to increase visual content discoverability.
        </li>
        <li class="text-gray-700">
          Ensure your site is mobile-friendly and loads quickly.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Add necessary imports for MetricCard and other UI components
</script>

<style>
/* Optional: Customize specific styles for this page */
</style>
