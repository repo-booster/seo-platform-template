<template>
  <div class="p-4 border border-gray-200 rounded-lg">
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-sm font-medium text-gray-600">{{ title }}</h3>
      <button class="text-gray-400 hover:text-gray-600">
        <InformationCircleIcon class="w-5 h-5" />
      </button>
    </div>
    
    <div class="flex items-center justify-between">
      <div>
        <div class="text-2xl font-bold">{{ value }}</div>
        <div class="text-sm text-gray-500">{{ subtext }}</div>
      </div>
      
      <div class="w-24">
        <template v-if="chartType === 'line'">
          <LineChart :data="data" />
        </template>
        <template v-else-if="chartType === 'circle'">
          <CircleProgress :percentage="percentage" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline'

defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  subtext: {
    type: String,
    required: true
  },
  chartType: {
    type: String,
    required: true,
    validator: (value) => ['line', 'circle'].includes(value)
  },
  data: {
    type: Array,
    default: () => []
  },
  percentage: {
    type: Number,
    default: 0
  }
})
</script>