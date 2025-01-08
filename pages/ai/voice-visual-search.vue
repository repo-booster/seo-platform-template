<template>
  <div class="space-y-6">
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Voice and Visual Search Insights</h1>
      <p class="text-gray-600 mb-6">Track and optimize for voice and visual search performance.</p>

      <div class="grid grid-cols-3 gap-6 mb-8">
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
          value="88"
          subtext="Voice/Visual SEO"
          chart-type="line"
          :data="[82, 83, 84, 85, 86, 87, 88]"
        />
      </div>

      <div class="border rounded-lg p-4">
        <h2 class="font-medium mb-4">Top Voice Queries</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span>"How to optimize for voice search"</span>
            <span class="text-green-500">125 searches</span>
          </div>
          <div class="flex items-center justify-between">
            <span>"Best SEO tools 2024"</span>
            <span class="text-green-500">98 searches</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>