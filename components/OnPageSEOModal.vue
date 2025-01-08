<template>
  <UModal v-model="show" :ui="{ width: 'sm:max-w-xl' }">
    <div class="p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold">On Page SEO Checker Settings</h2>
        <button @click="show = false" class="text-gray-400 hover:text-gray-500">
          <XMarkIcon class="h-5 w-5" />
        </button>
      </div>

      <!-- Steps Navigation -->
      <div class="flex items-center mb-8">
        <div 
          v-for="(step, index) in steps" 
          :key="step.id"
          class="flex items-center"
        >
          <div 
            class="flex items-center justify-center w-8 h-8 rounded-full"
            :class="[
              currentStep >= index 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-600'
            ]"
          >
            {{ index + 1 }}
          </div>
          <div 
            v-if="index < steps.length - 1" 
            class="h-0.5 w-16 mx-2"
            :class="currentStep > index ? 'bg-blue-600' : 'bg-gray-200'"
          ></div>
        </div>
      </div>

      <!-- Step Content -->
      <div class="mb-8">
        <!-- Step 1: Pages and Keywords -->
        <div v-if="currentStep === 0">
          <h3 class="font-medium mb-4">Add pages to optimize</h3>
          <div class="space-y-4">
            <!-- Import Options -->
            <div class="flex space-x-2 mb-4">
              <button 
                v-for="option in importOptions" 
                :key="option"
                class="px-3 py-1 rounded-md text-sm"
                :class="selectedImport === option ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'"
                @click="selectedImport = option"
              >
                {{ option }}
              </button>
            </div>

            <!-- URL and Keyword Inputs -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm text-gray-700 mb-1">Page you'd like to optimize</label>
                <input 
                  v-model="pageUrl"
                  type="text"
                  placeholder="Enter URL"
                  class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm text-gray-700 mb-1">For keyword</label>
                <input 
                  v-model="keyword"
                  type="text"
                  placeholder="Enter keyword"
                  class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Crawler Settings -->
        <div v-if="currentStep === 1">
          <h3 class="font-medium mb-4">Select user agent</h3>
          <p class="text-sm text-gray-600 mb-4">Select a user agent to crawl your site.</p>
          <select 
            v-model="selectedAgent"
            class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="googlebot-desktop">GoogleBot-Desktop</option>
            <option value="googlebot-mobile">GoogleBot-Mobile</option>
            <option value="bingbot">BingBot</option>
          </select>
        </div>

        <!-- Step 3: Schedule -->
        <div v-if="currentStep === 2">
          <h3 class="font-medium mb-4">How often should we re-collect ideas</h3>
          <p class="text-sm text-gray-600 mb-4">You can skip this step.</p>
          <div class="space-y-4">
            <label class="flex items-center">
              <input 
                type="radio" 
                v-model="schedule" 
                value="weekly"
                class="h-4 w-4 text-blue-600"
              />
              <span class="ml-2">Weekly</span>
            </label>
            <label class="flex items-center">
              <input 
                type="radio" 
                v-model="schedule" 
                value="never"
                class="h-4 w-4 text-blue-600"
              />
              <span class="ml-2">Never</span>
            </label>
            <label class="flex items-center" v-if="schedule === 'weekly'">
              <input 
                type="checkbox" 
                v-model="emailUpdates"
                class="h-4 w-4 rounded text-blue-600"
              />
              <span class="ml-2">Get email updates every Monday</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between">
        <button 
          v-if="currentStep > 0"
          @click="currentStep--"
          class="text-blue-600 hover:text-blue-700"
        >
          ← {{ steps[currentStep - 1].name }}
        </button>
        <div class="flex-1"></div>
        <button 
          v-if="currentStep < steps.length - 1"
          @click="currentStep++"
          class="text-blue-600 hover:text-blue-700"
        >
          {{ steps[currentStep + 1].name }} →
        </button>
        <button 
          v-else
          @click="startAnalysis"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Start Analysis
        </button>
      </div>
    </div>
  </UModal>
</template>

<script setup>
import { ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const show = ref(false)
const currentStep = ref(0)
const selectedImport = ref('Manually')
const pageUrl = ref('')
const keyword = ref('')
const selectedAgent = ref('googlebot-desktop')
const schedule = ref('weekly')
const emailUpdates = ref(false)

const importOptions = ['Auto Import', 'Manually', 'File', 'GSC', 'Organic Research']

const steps = [
  { id: 1, name: 'Pages and target keywords' },
  { id: 2, name: 'Crawler user agent', optional: true },
  { id: 3, name: 'Schedule', optional: true }
]

const startAnalysis = () => {
  // Implement analysis logic
  show.value = false
}

defineExpose({
  show
})
</script>
