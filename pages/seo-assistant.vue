<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">SEO Assistant</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">Get instant SEO advice and recommendations from our AI-powered assistant</p>
    </div>

    <!-- Chat Interface -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow h-[calc(100vh-16rem)]">
      <!-- Chat Messages -->
      <div class="h-[calc(100%-5rem)] overflow-y-auto p-6 space-y-4">
        <template v-for="message in messages" :key="message.id">
          <!-- AI Message -->
          <div v-if="message.type === 'ai'" class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
              <SparklesIcon class="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
            <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
              <UserIcon class="w-5 h-5 text-gray-600 dark:text-gray-300" />
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
import { SparklesIcon, UserIcon, LightBulbIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline'

const userInput = ref('')
const isTyping = ref(false)
const messages = ref([
  {
    id: 1,
    type: 'ai',
    content: 'Hello! I\'m your SEO assistant. I can help you with:',
    tips: [
      'On-page SEO optimization',
      'Keyword research and analysis',
      'Technical SEO recommendations',
      'Content optimization strategies',
      'Link building advice'
    ]
  }
])

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