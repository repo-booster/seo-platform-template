<template>
  <svg class="w-full h-full" viewBox="0 0 36 36">
    <path
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      stroke="#eee"
      stroke-width="3"
    />
    <path
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      :stroke="color"
      stroke-width="3"
      :stroke-dasharray="`${percentage}, 100`"
    />
  </svg>
</template>

<script setup>
defineProps({
  percentage: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: '#3b82f6'
  }
})
</script>