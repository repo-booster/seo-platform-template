<template>
  <UModal v-model="show">
    <div class="p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold">Create New Project</h2>
        <button @click="show = false" class="text-gray-400 hover:text-gray-500">
          <XMarkIcon class="h-5 w-5" />
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Project Details -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
          <input 
            v-model="form.name"
            type="text"
            required
            class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Domain</label>
          <input 
            v-model="form.domain"
            type="text"
            required
            placeholder="example.com"
            class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Tools Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Select Tools</label>
          <div class="space-y-2">
            <label v-for="tool in availableTools" :key="tool.id" class="flex items-center">
              <input 
                type="checkbox"
                v-model="form.selectedTools"
                :value="tool.id"
                class="h-4 w-4 rounded text-blue-600"
              />
              <span class="ml-2">{{ tool.name }}</span>
            </label>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end space-x-4">
          <button 
            type="button"
            @click="show = false"
            class="px-4 py-2 border rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  </UModal>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const show = ref(false)
const emit = defineEmits(['project-created'])

const availableTools = [
  { id: 'site-audit', name: 'Site Audit' },
  { id: 'position-tracking', name: 'Position Tracking' },
  { id: 'backlink-audit', name: 'Backlink Audit' },
  { id: 'on-page-seo', name: 'On Page SEO' },
  { id: 'keyword-research', name: 'Keyword Research' },
  { id: 'content-analyzer', name: 'Content Analyzer' }
]

const form = reactive({
  name: '',
  domain: '',
  selectedTools: []
})

const handleSubmit = () => {
  const newProject = {
    name: form.name,
    domain: form.domain,
    lastUpdated: new Date().toISOString().split('T')[0],
    siteHealth: 0,
    visibility: 0,
    tools: form.selectedTools.map(toolId => {
      const tool = availableTools.find(t => t.id === toolId)
      return {
        name: tool.name,
        status: 'Not configured'
      }
    })
  }

  emit('project-created', newProject)
  show.value = false
  
  // Reset form
  form.name = ''
  form.domain = ''
  form.selectedTools = []
}

defineExpose({
  show
})
</script>