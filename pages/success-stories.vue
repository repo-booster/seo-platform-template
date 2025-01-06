<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-8">Success Stories</h1>
    
    <div class="space-y-12">
      <div v-for="story in stories" :key="story.id" 
           class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="p-8">
          <div class="flex items-center mb-6">
            <img :src="story.logo" :alt="story.company" class="h-12 w-12 rounded-full mr-4">
            <div>
              <h2 class="text-xl font-semibold">{{ story.company }}</h2>
              <p class="text-gray-600">{{ story.industry }}</p>
            </div>
          </div>
          
          <blockquote class="text-lg text-gray-600 mb-6">
            "{{ story.quote }}"
          </blockquote>
          
          <div class="grid grid-cols-3 gap-6 mb-6">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600">{{ story.stats.traffic }}%</div>
              <div class="text-sm text-gray-600">Traffic Increase</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600">{{ story.stats.rankings }}%</div>
              <div class="text-sm text-gray-600">Rankings Improvement</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600">{{ story.stats.conversion }}%</div>
              <div class="text-sm text-gray-600">Conversion Rate</div>
            </div>
          </div>
          
          <button class="text-blue-600 hover:text-blue-700">Read full case study →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stories = [
  {
    id: 1,
    company: 'TechStart Inc.',
    industry: 'SaaS',
    logo: '/images/company1.jpg',
    quote: 'Repo-Booster helped us increase our organic traffic by 200% in just 6 months.',
    stats: {
      traffic: 200,
      rankings: 150,
      conversion: 25
    }
  },
  {
    id: 2,
    company: 'Global Retail',
    industry: 'E-commerce',
    logo: '/images/company2.jpg',
    quote: 'The keyword research tools helped us identify high-converting keywords we hadn\'t considered before.',
    stats: {
      traffic: 180,
      rankings: 120,
      conversion: 35
    }
  }
]
</script>