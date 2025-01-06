<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Backlink Analytics</h1>
      <p class="text-gray-600 mb-4">Quickly evaluate and compare the profiles in-depth, using the largest and most up-to-date backlink checker on the market.</p>
      
      <div class="flex space-x-4">
        <div class="flex-1">
          <input 
            type="text" 
            placeholder="Enter domain or URL" 
            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <AnalyzeButton />
      </div>
    </div>
    <!-- Rest of the template remains unchanged -->
  </div>
</template>

<script setup>
// ... existing imports ...
</script>