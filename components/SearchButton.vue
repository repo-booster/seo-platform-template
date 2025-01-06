<template>
  <button 
    @click="handleClick"
    :disabled="loading"
    class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
  >
    <template v-if="loading">
      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Searching...</span>
    </template>
    <span v-else>Search</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const handleClick = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
}
</script>