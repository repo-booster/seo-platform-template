<template>
  <div class="bg-white p-6 rounded-lg shadow-sm">
    <h2 class="text-xl font-semibold mb-4">Connect Google Search Console</h2>
    
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
        <div class="flex space-x-2">
          <input 
            v-model="siteUrl"
            type="url" 
            placeholder="https://example.com"
            class="flex-1 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <button 
            @click="addSite"
            :disabled="!siteUrl || loading"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            <template v-if="loading">
              <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </template>
            <span v-else>Add Site</span>
          </button>
        </div>
      </div>

      <!-- Connected Sites -->
      <div v-if="sites.length > 0">
        <h3 class="font-medium mb-2">Connected Sites</h3>
        <ul class="space-y-2">
          <li v-for="site in sites" :key="site.siteUrl" 
              class="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>{{ site.siteUrl }}</span>
            <span :class="site.permissionLevel === 'siteOwner' ? 'text-green-600' : 'text-blue-600'">
              {{ site.permissionLevel }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSearchConsole } from '~/composables/useSearchConsole'

const { getSites } = useSearchConsole()
const siteUrl = ref('')
const loading = ref(false)
const sites = ref([])

const addSite = async () => {
  if (!siteUrl.value) return
  
  loading.value = true
  try {
    const response = await $fetch('/api/search-console/add-site', {
      method: 'POST',
      body: { siteUrl: siteUrl.value }
    })
    
    if (response.success) {
      // Refresh sites list
      await loadSites()
      siteUrl.value = ''
    } else {
      console.error('Failed to add site:', response.error)
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}

const loadSites = async () => {
  const response = await getSites()
  if (response?.siteEntry) {
    sites.value = response.siteEntry
  }
}

onMounted(() => {
  loadSites()
})
</script>