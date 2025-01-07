<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4">Local SEO</h1>
      <p class="text-gray-600 mb-4">Optimize your business for local search results and manage your online presence.</p>
      
      <!-- Business Information Form -->
      <form @submit.prevent="updateBusiness" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input 
              v-model="business.name"
              type="text"
              class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input 
              v-model="business.website"
              type="url"
              class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input 
              v-model="business.address"
              type="text"
              class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input 
              v-model="business.phone"
              type="tel"
              class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button 
          type="submit"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Update Business Information
        </button>
      </form>
    </div>

    <!-- Business Listings -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium mb-4">Business Listings</h2>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="platform in platforms" :key="platform.name" 
             class="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
          <UIcon 
            :name="platform.icon" 
            class="w-8 h-8 mx-auto mb-2"
            :class="platform.iconClass"
          />
          <div class="font-medium mb-1">{{ platform.name }}</div>
          <div class="text-sm text-gray-500">{{ platform.status }}</div>
        </div>
      </div>
    </div>

    <!-- Reviews Management -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-lg font-medium mb-4">Reviews Management</h2>
      <div class="grid grid-cols-3 gap-6 mb-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600">4.8</div>
          <div class="text-sm text-gray-600">Average Rating</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600">156</div>
          <div class="text-sm text-gray-600">Total Reviews</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600">92%</div>
          <div class="text-sm text-gray-600">Positive Reviews</div>
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
    // Implement business information update logic
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Show success message
  } catch (error) {
    console.error('Error updating business:', error)
  } finally {
    loading.value = false
  }
}
</script>