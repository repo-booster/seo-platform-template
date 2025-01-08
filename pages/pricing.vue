<template>
  <div class="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Plans & Pricing</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">Choose the perfect plan for your needs</p>
      <div class="flex items-center justify-center space-x-2 mb-8">
        <span class="text-gray-600 dark:text-gray-300">Monthly</span>
        <button 
          class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200 dark:bg-gray-600"
          :class="{ 'bg-blue-600': isAnnual }"
          @click="isAnnual = !isAnnual"
        >
          <span 
            class="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            :class="{ 'translate-x-5': isAnnual }"
          />
        </button>
        <span class="text-gray-600 dark:text-gray-300">Annual</span>
        <span class="ml-2 inline-flex items-center rounded-full bg-green-100 dark:bg-green-800 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-100">
          Save up to 17%
        </span>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="plan in plans" :key="plan.name" 
           class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border"
           :class="{ 'border-blue-500': plan.popular, 'border-gray-200 dark:border-gray-700': !plan.popular }">
        <div class="text-center">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100">{{ plan.name }}</h2>
          <div class="mt-4">
            <span class="text-4xl font-bold text-gray-800 dark:text-gray-100">${{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}</span>
            <span class="text-gray-500 dark:text-gray-400">/mo</span>
          </div>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{{ plan.description }}</p>
        </div>

        <ul class="mt-6 space-y-4">
          <li v-for="feature in plan.features" :key="feature" 
              class="flex items-start">
            <CheckIcon class="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
            <span class="text-gray-600 dark:text-gray-300">{{ feature }}</span>
          </li>
        </ul>

        <button 
          class="mt-8 w-full px-4 py-2 rounded-md text-center font-medium"
          :class="plan.popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'"
        >
          {{ plan.popular ? 'Start free trial' : 'Subscribe' }}
        </button>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Frequently Asked Questions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="faq in faqs" :key="faq.question">
          <h3 class="font-medium text-gray-800 dark:text-gray-100 mb-2">{{ faq.question }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/outline'

const isAnnual = ref(false)

const plans = [
  {
    name: 'Pro',
    monthlyPrice: '139',
    annualPrice: '119',
    description: 'For websites and small teams',
    features: [
      '5 projects',
      '500 keywords to track',
      '10,000 results per report',
      'SEO, PPC, and research tools',
      'Content Marketing Toolkit'
    ],
    popular: false
  },
  {
    name: 'Elite',
    monthlyPrice: '249',
    annualPrice: '229',
    description: 'For agencies and mid-size businesses',
    features: [
      '15 projects',
      '1,500 keywords to track',
      '30,000 results per report',
      'Historical data',
      'Content Marketing Platform',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Organisation',
    monthlyPrice: '499',
    annualPrice: '449',
    description: 'For large agencies and enterprises',
    features: [
      '40 projects',
      '5,000 keywords to track',
      '50,000 results per report',
      'White label reports',
      'API access',
      'Share of Voice metrics'
    ],
    popular: false
  }
]

const faqs = [
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for annual plans.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 7-day free trial on all plans. No credit card required.'
  },
  {
    question: 'What happens after my trial ends?',
    answer: 'You can choose to subscribe to any plan or your account will be automatically downgraded to a limited free version.'
  }
]
</script>
