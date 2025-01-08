<template>
  <div class="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">SEO Tools & Features</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Boost your website's visibility with our comprehensive suite of SEO tools
      </p>
      <div class="flex justify-center space-x-4">
        <button class="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          Start Free Trial
        </button>
        <button class="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
          Schedule Demo
        </button>
      </div>
    </div>

    <!-- Feature Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="tool in seoTools"
        :key="tool.title"
        class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
          <component :is="tool.icon" class="h-6 w-6 text-blue-600 dark:text-blue-300" />
        </div>
        <h3 class="font-medium text-lg mb-2 text-gray-800 dark:text-gray-100">{{ tool.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">{{ tool.description }}</p>
        <ul class="space-y-2 mb-4">
          <li
            v-for="feature in tool.features"
            :key="feature"
            class="flex items-center text-sm text-gray-600 dark:text-gray-300"
          >
            <CheckIcon class="h-4 w-4 text-green-500 mr-2" />
            {{ feature }}
          </li>
        </ul>
        <NuxtLink
          :to="tool.link"
          class="text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium"
        >
          Learn more →
        </NuxtLink>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center"
      >
        <div class="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">{{ stat.value }}</div>
        <div class="text-sm text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white">
      <h2 class="text-2xl font-bold mb-4">Ready to improve your SEO?</h2>
      <p class="mb-6 text-blue-100">
        Start your free trial today and see the difference our tools can make.
      </p>
      <button class="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-50">
        Get Started Now
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  DocumentTextIcon,
  MapIcon,
  CheckIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/vue/24/outline'

const seoTools = [
  {
    title: 'Keyword Research',
    icon: MagnifyingGlassIcon,
    description: 'Find the most valuable keywords for your business',
    features: [
      'Keyword difficulty score',
      'Search volume data',
      'Keyword suggestions',
      'Competitive analysis'
    ],
    link: '/keyword-research'
  },
  {
    title: 'Position Tracking',
    icon: ChartBarIcon,
    description: 'Monitor your rankings for target keywords',
    features: [
      'Daily rank updates',
      'Competitor tracking',
      'Mobile vs desktop',
      'Local rankings'
    ],
    link: '/position-tracking'
  },
  {
    title: 'Site Audit',
    icon: ClipboardDocumentCheckIcon,
    description: 'Comprehensive technical SEO analysis',
    features: [
      'Technical issues detection',
      'SEO recommendations',
      'Site health score',
      'Crawl statistics'
    ],
    link: '/site-audit'
  },
  {
    title: 'Backlink Analytics',
    icon: LinkIcon,
    description: 'Analyze your backlink profile',
    features: [
      'Backlink quality metrics',
      'Competitor backlinks',
      'Link building opportunities',
      'Toxic link detection'
    ],
    link: '/backlink-tools'
  },
  {
    title: 'On-Page SEO',
    icon: DocumentTextIcon,
    description: 'Optimize your content for better rankings',
    features: [
      'Content optimization',
      'Meta tags analysis',
      'Internal linking',
      'Core Web Vitals'
    ],
    link: '/on-page-seo'
  },
  {
    title: 'Local SEO',
    icon: MapIcon,
    description: 'Improve your local search presence',
    features: [
      'Local ranking factors',
      'Business listings',
      'Local competitor analysis',
      'Review management'
    ],
    link: '/local-seo'
  }
]

const stats = [
  {
    value: '20B+',
    label: 'Keywords in database'
  },
  {
    value: '43T+',
    label: 'Backlinks tracked'
  },
  {
    value: '808M+',
    label: 'Domain profiles'
  },
  {
    value: '140+',
    label: 'Geo databases'
  }
]
</script>
