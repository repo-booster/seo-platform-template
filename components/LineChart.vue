<template>
  <div class="relative h-16">
    <svg class="w-full h-full" viewBox="0 0 100 40">
      <polyline
        fill="none"
        stroke="#3b82f6"
        stroke-width="2"
        :points="points"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const points = computed(() => {
  const maxValue = Math.max(...props.data)
  return props.data
    .map((value, index) => {
      const x = (index / (props.data.length - 1)) * 100
      const y = 40 - ((value / maxValue) * 35)
      return `${x},${y}`
    })
    .join(' ')
})
</script>