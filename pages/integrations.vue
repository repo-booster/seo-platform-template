<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-8">Partner Integrations</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="integration in integrations" :key="integration.name" 
           class="bg-white p-6 rounded-lg shadow-sm">
        <img :src="integration.logo" :alt="integration.name" class="h-12 mb-4">
        <h3 class="font-medium mb-2">{{ integration.name }}</h3>
        <p class="text-gray-600 mb-4">{{ integration.description }}</p>
        <button class="text-blue-600 hover:text-blue-700">Learn more →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const integrations = [
  {
    name: 'Google Analytics',
    logo: '/images/ga-logo.png',
    description: 'Connect your analytics data for deeper insights into your traffic and user behavior.'
  },
  {
    name: 'Google Search Console',
    logo: '/images/gsc-logo.png',
    description: 'Import your search performance data and track your rankings more effectively.'
  },
  {
    name: 'WordPress',
    logo: '/images/wp-logo.png',
    description: 'Seamlessly integrate SEO tools directly into your WordPress dashboard.'
  }
]
</script>