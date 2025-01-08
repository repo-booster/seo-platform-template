<template>
  <NuxtLink :to="href" 
            class="flex items-center px-2 py-2 text-sm font-medium rounded-md"
            :class="[$route.path === href ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700']">
    <component :is="icon" 
              class="mr-3 h-5 w-5"
              :class="[$route.path === href ? 'text-blue-500 dark:text-blue-300' : 'text-gray-400 dark:text-gray-500']" />
    {{ name }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  }
})
</script>