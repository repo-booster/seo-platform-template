```vue
<template>
  <div class="max-w-5xl mx-auto p-6">
    <!-- Header Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">SEO Assistant</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Get instant SEO advice and recommendations powered by AI
      </p>
    </div>

    <!-- Chat Interface -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <!-- Messages Area -->
      <div class="h-[calc(100vh-20rem)] overflow-y-auto p-6 space-y-6">
        <!-- Welcome Message -->
        <div class="flex items-start space-x-3">
          <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
            <SparklesIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div class="flex-1">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 max-w-3xl">
              <p class="text-gray-800 dark:text-gray-200 mb-4">
                Hi! I'm your SEO assistant. I can help you with:
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(feature, index) in features" :key="index"
                     class="flex items-start space-x-2">
                  <component :is="feature.icon" 
                           class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 dark:text-gray-300">{{ feature.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Messages -->
        <template v-for="message in messages" :key="message.id">
          <!-- AI Message -->
          <div v-if="message.type === 'ai'" class="flex items-start space-x-3">
            <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
              <SparklesIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div class="flex-1">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 max-w-3xl">
                <p class="text-gray-800 dark:text-gray-200">{{ message.content }}</p>
              </div>
              <div v-if="message.tips?.length" class="mt-3 space-y-2">
                <div v-for="(tip, index) in message.tips" :key="index"
                     class="flex items-start space-x-2 text-sm">
                  <LightBulbIcon class="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-600 dark:text-gray-300">{{ tip }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- User Message -->
          <div v-else class="flex items-start justify-end space-x-3">
            <div class="flex-1 flex justify-end">
              <div class="bg-blue-600 text-white rounded-lg p-4 max-w-3xl">
                <p>{{ message.content }}</p>
              </div>
            </div>
            <div class="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
              <UserIcon class="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </div>
          </div>
        </template>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex items-center space-x-2">
          <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
          <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0.2s"></div>
          <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0.4s"></div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="border-t dark:border-gray-700 p-4">
        <form @submit.prevent="sendMessage" class="flex space-x-4">
          <UTextarea
            v-model="userInput"
            :rows="1"
            class="flex-1"
            placeholder="Ask me anything about SEO..."
            @keydown.enter.exact.prevent="sendMessage"
          />
          <UButton
            :loading="isTyping"
            :disabled="!userInput.trim()"
            @click="sendMessage"
            color="blue"
          >
            <template #leading>
              <PaperAirplaneIcon class="h-4 w-4" />
            </template>
            Send
          </UButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  SparklesIcon, 
  UserIcon, 
  LightBulbIcon, 
  PaperAirplaneIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ChartBarIcon,
  LinkIcon,
  GlobeAltIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'

// Define layout
definePageMeta({
  layout: 'seo'
})

const features = [
  { icon: MagnifyingGlassIcon, text: 'Keyword research and analysis' },
  { icon: DocumentTextIcon, text: 'Content optimization strategies' },
  { icon: ChartBarIcon, text: 'Technical SEO recommendations' },
  { icon: LinkIcon, text: 'Link building advice' },
  { icon: GlobeAltIcon, text: 'Local SEO optimization' },
  { icon: RocketLaunchIcon, text: 'Performance improvements' }
]

const userInput = ref('')
const isTyping = ref(false)
const messages = ref([])

// Simulated AI responses
const seoResponses = [
  {
    content: 'To improve your on-page SEO, focus on these key areas:',
    tips: [
      'Optimize your title tags and meta descriptions',
      'Use header tags (H1, H2, H3) properly',
      'Include your target keywords naturally in the content',
      'Optimize images with alt text',
      'Ensure your content is mobile-friendly'
    ]
  },
  {
    content: 'Here are some effective link building strategies:',
    tips: [
      'Create high-quality, linkable content',
      'Reach out to industry influencers',
      'Guest post on relevant websites',
      'Recover broken backlinks',
      'Build relationships with other website owners'
    ]
  },
  {
    content: 'For technical SEO, make sure to:',
    tips: [
      'Improve your site speed and performance',
      'Fix broken links and redirect chains',
      'Implement proper URL structure',
      'Create and submit an XML sitemap',
      'Use canonical tags correctly'
    ]
  }
]

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  // Add user message
  messages.value.push({
    id: Date.now(),
    type: 'user',
    content: userInput.value
  })

  // Clear input
  userInput.value = ''

  // Show typing indicator
  isTyping.value = true

  // Simulate AI response delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Add AI response
  messages.value.push({
    id: Date.now(),
    type: 'ai',
    ...seoResponses[Math.floor(Math.random() * seoResponses.length)]
  })

  isTyping.value = false
}
</script>
```