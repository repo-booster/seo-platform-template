<template>
  <div class="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Repo-Booster Features</h1>
      <p class="text-gray-600 mb-8">Start solving your marketing challenges today with 55+ tools and reports on Repo-Booster.</p>
      <button class="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Get Started for Free
      </button>
    </div>

    <!-- Categories -->
    <div class="flex justify-center space-x-4 flex-wrap">
      <button class="px-4 py-2 bg-emerald-500 text-white rounded-full">All</button>
      <button class="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">SEO</button>
      <button class="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">Content</button>
      <button class="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">Market Research</button>
      <button class="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">Advertising</button>
      <button class="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">Social Media</button>
    </div>

    <!-- Feature Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="feature in features" :key="feature.title" 
           class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div class="h-32 bg-blue-50 rounded-lg mb-4 flex items-center justify-center">
          <img :src="feature.image" :alt="feature.title" class="h-24 w-24 object-contain" />
        </div>
        <h3 class="font-medium mb-2">{{ feature.title }}</h3>
        <p class="text-sm text-gray-600 mb-4">{{ feature.description }}</p>
        <div class="flex justify-between items-center">
          <button class="text-sm text-gray-600 hover:text-gray-900">Learn more</button>
          <span class="text-xs text-gray-500">${{ feature.price }}/mo</span>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="bg-purple-100 rounded-lg p-8 text-center">
      <h2 class="text-2xl font-bold mb-4">Get it all in one with Repo-Booster</h2>
      <button class="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Get free trial
      </button>
    </div>

    <!-- All Tools Section -->
    <div>
      <h2 class="text-2xl font-bold mb-6">All tools</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="category in categories" :key="category.title">
          <h3 class="font-medium mb-4">{{ category.title }}</h3>
          <ul class="space-y-2">
            <li v-for="tool in category.tools" :key="tool" 
                class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
              {{ tool }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: 'Keyword Research',
    description: 'Get high-performing keywords for your content and PPC campaigns.',
    image: '/images/keyword-research.svg',
    price: '119.95'
  },
  {
    title: 'On-page SEO',
    description: 'Get ideas to improve your website\'s on-page SEO.',
    image: '/images/on-page-seo.svg',
    price: '119.95'
  },
  {
    title: 'Competitor Analysis',
    description: 'Boost your performance by analyzing competitors.',
    image: '/images/competitor-analysis.svg',
    price: '119.95'
  },
  {
    title: 'Content Marketing',
    description: 'Develop a powerful content strategy with data-driven insights.',
    image: '/images/content-marketing.svg',
    price: '119.95'
  },
  {
    title: 'Local SEO',
    description: 'Optimize your site for local search results.',
    image: '/images/local-seo.svg',
    price: '119.95'
  },
  {
    title: 'Rank Tracking',
    description: 'Track changes of your target keywords in real-time.',
    image: '/images/rank-tracking.svg',
    price: '119.95'
  }
]

const categories = [
  {
    title: 'SEO',
    tools: [
      'Keyword Research',
      'On-Page SEO',
      'Link Building',
      'Rank Tracking',
      'Site Audit',
      'Backlink Analytics'
    ]
  },
  {
    title: 'Content',
    tools: [
      'Topic Research',
      'SEO Writing Assistant',
      'Content Audit',
      'Post Tracking',
      'Brand Monitoring'
    ]
  },
  {
    title: 'Competitive Research',
    tools: [
      'Traffic Analytics',
      'Market Explorer',
      'Organic Research',
      'Advertising Research'
    ]
  },
  {
    title: 'Social Media',
    tools: [
      'Social Media Poster',
      'Social Media Tracker',
      'Social Media Ads',
      'Social Media Analytics'
    ]
  }
]
</script>