<template>
  <div class="space-y-6">
    <!-- Header and other sections remain unchanged -->

    <!-- Directory Listings -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium mb-4">Stay visible with business listings in top directories</h2>
      <div class="grid grid-cols-4 gap-4 mb-6">
        <div v-for="platform in platforms" :key="platform.name" 
             class="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
          <UIcon 
            :name="platform.icon" 
            class="w-8 h-8 mx-auto mb-2"
            :class="platform.iconClass" />
          <span class="text-sm font-medium">{{ platform.name }}</span>
        </div>
      </div>
    </div>

    <!-- Rest of the template remains unchanged -->
  </div>
</template>

<script setup>
import { 
  BuildingOfficeIcon,
  DocumentTextIcon,
  StarIcon
} from '@heroicons/vue/24/outline'

const platforms = [
  { name: 'Google', icon: 'i-simple-icons-google', iconClass: 'text-blue-600' },
  { name: 'Facebook', icon: 'i-simple-icons-facebook', iconClass: 'text-blue-700' },
  { name: 'Yelp', icon: 'i-simple-icons-yelp', iconClass: 'text-red-600' },
  { name: 'Apple Maps', icon: 'i-simple-icons-apple', iconClass: 'text-gray-900' },
  { name: 'Bing', icon: 'i-simple-icons-bing', iconClass: 'text-teal-700' },
  { name: 'TripAdvisor', icon: 'i-simple-icons-tripadvisor', iconClass: 'text-green-700' },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', iconClass: 'text-pink-600' },
  { name: 'LinkedIn', icon: 'i-simple-icons-linkedin', iconClass: 'text-blue-800' }
]
</script>