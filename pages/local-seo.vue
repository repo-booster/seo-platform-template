<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Local SEO</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Optimize your business for local search results and manage your online presence.
      </p>

      <!-- Business Information Form -->
      <form @submit.prevent="updateBusiness" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Business Name</label>
            <input 
              v-model="business.name"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
            <input 
              v-model="business.website"
              type="url"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
            <input 
              v-model="business.address"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
            <input 
              v-model="business.phone"
              type="tel"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button 
          type="submit"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Update Business Information
        </button>
      </form>
    </div>

    <!-- Business Listings -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">Business Listings</h2>
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="platform in platforms"
          :key="platform.name"
          class="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-700 hover:shadow-md transition-shadow"
        >
          <UIcon 
            :name="platform.icon" 
            class="w-8 h-8 mx-auto mb-2"
            :class="platform.iconClass"
          />
          <div class="font-medium mb-1 text-gray-800 dark:text-gray-100">{{ platform.name }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-300">{{ platform.status }}</div>
        </div>
      </div>
    </div>

    <!-- Reviews Management -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">Reviews Management</h2>
      <div class="grid grid-cols-3 gap-6 mb-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-300">4.8</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Average Rating</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-300">156</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Total Reviews</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-300">92%</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Positive Reviews</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const business = ref({
  name: '',
  website: '',
  address: '',
  phone: ''
})

const platforms = [
  { name: 'Google Business', icon: 'i-simple-icons-google', iconClass: 'text-blue-600', status: 'Verified' },
  { name: 'Bing Places', icon: 'i-simple-icons-bing', iconClass: 'text-teal-600', status: 'Pending' },
  { name: 'Yelp', icon: 'i-simple-icons-yelp', iconClass: 'text-red-600', status: 'Claimed' },
  { name: 'Facebook', icon: 'i-simple-icons-facebook', iconClass: 'text-blue-700', status: 'Verified' }
]

const updateBusiness = async () => {
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
  } catch (error) {
    console.error('Error updating business:', error)
  } finally {
    loading.value = false
  }
}
</script>
