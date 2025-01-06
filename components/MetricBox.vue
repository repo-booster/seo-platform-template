<template>
  <div class="p-4 border border-gray-200 rounded-lg">
    <h3 class="text-sm font-medium text-gray-600 mb-2">{{ title }}</h3>
    <div class="text-2xl font-bold">{{ value }}</div>
    <div class="text-sm text-gray-500">{{ percentage }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  percentage: {
    type: String,
    required: true
  }
})
</script>