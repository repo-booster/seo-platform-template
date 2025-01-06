<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="p-5">
      <div class="flex items-center">
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-500 truncate">
            {{ title }}
          </p>
          <p class="mt-1 text-3xl font-semibold text-gray-900">
            {{ value }}
          </p>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex items-center">
          <div :class="[
            type === 'positive' ? 'text-green-600' : 'text-red-600',
            'inline-flex items-center text-sm'
          ]">
            <component :is="type === 'positive' ? ArrowUpIcon : ArrowDownIcon" 
                      class="h-4 w-4 mr-1" />
            {{ change }}
          </div>
          <span class="text-gray-500 text-sm ml-2">vs last month</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid'

defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  change: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['positive', 'negative'].includes(value)
  }
})
</script>