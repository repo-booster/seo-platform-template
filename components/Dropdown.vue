<template>
  <div>
    <button
      @click="toggle"
      class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
      :class="premium ? 'bg-blue-500 text-white' : ''">
      <span>{{ title }}</span>
      <i :class="isOpen ? 'i-heroicons-outline-chevron-up' : 'i-heroicons-outline-chevron-down'"></i>
    </button>
    <ul v-if="isOpen" class="mt-2 space-y-1 pl-5">
      <li v-for="item in items" :key="item.href">
        <NuxtLink
          :to="item.href"
          class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <i :class="item.icon" class="w-5 h-5 mr-3"></i>
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  items: Array,
  premium: Boolean,
})

const isOpen = ref(false)
const toggle = () => (isOpen.value = !isOpen.value)
</script>
