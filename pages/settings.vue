<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-2xl font-bold mb-8">Settings</h1>

    <!-- Theme Settings -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
      <div class="p-6">
        <h2 class="text-lg font-medium mb-2">Theme</h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">Customize the look and feel of your dashboard.</p>
        
        <div class="flex items-center space-x-4">
          <button 
            @click="setTheme('light')"
            class="flex items-center space-x-2 px-4 py-2 rounded-md"
            :class="colorMode.value === 'light' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'"
          >
            <SunIcon class="h-5 w-5" />
            <span>Light</span>
          </button>
          <button 
            @click="setTheme('dark')"
            class="flex items-center space-x-2 px-4 py-2 rounded-md"
            :class="colorMode.value === 'dark' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'"
          >
            <MoonIcon class="h-5 w-5" />
            <span>Dark</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Profile Settings -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
      <div class="p-6">
        <h2 class="text-lg font-medium mb-2">Profile</h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">This information will be displayed publicly so be careful what you share.</p>

        <form @submit.prevent="saveProfile" class="space-y-6">
          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Will appear on receipts, invoices, and other communication.</p>
            <input 
              v-model="profile.name"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            >
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Used to sign in, for email receipts and product updates.</p>
            <input 
              v-model="profile.email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            >
          </div>

          <!-- Username -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Your unique username for logging in and your profile URL.</p>
            <div class="flex rounded-md shadow-sm">
              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm dark:bg-gray-600 dark:border-gray-500">
                repo-booster.com/
              </span>
              <input 
                v-model="profile.username"
                type="text"
                class="flex-1 px-3 py-2 border border-gray-300 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
          </div>

          <!-- Avatar -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Avatar</label>
            <div class="flex items-center space-x-4">
              <div class="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <UserIcon v-if="!profile.avatar" class="h-8 w-8 text-gray-400" />
                <img v-else :src="profile.avatar" :alt="profile.name" class="h-full w-full object-cover">
              </div>
              <button 
                type="button"
                class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              >
                Choose
              </button>
              <p class="text-xs text-gray-500">JPG, GIF or PNG. 1MB Max.</p>
            </div>
          </div>

          <!-- Bio -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Brief description for your profile. URLs are hyperlinked.</p>
            <textarea 
              v-model="profile.bio"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
          </div>

          <!-- Password -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Password</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Confirm your current password before setting a new one.</p>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current password</label>
              <input 
                v-model="passwords.current"
                type="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New password</label>
              <input 
                v-model="passwords.new"
                type="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
              >
            </div>
          </div>

          <div class="flex justify-end">
            <button 
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Danger Zone -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div class="p-6">
        <h2 class="text-lg font-medium text-red-600 mb-2">Danger Zone</h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">
          No longer want to use our service? You can delete your account here. This action is not reversible. 
          All information related to this account will be deleted permanently.
        </p>

        <button 
          @click="confirmDelete"
          class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Delete account
        </button>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <UModal v-model="showDeleteModal">
      <div class="p-6">
        <h3 class="text-lg font-medium mb-4">Delete Account</h3>
        <p class="text-gray-600 mb-6">Are you sure you want to delete your account? This action cannot be undone.</p>
        <div class="flex justify-end space-x-4">
          <button 
            @click="showDeleteModal = false"
            class="px-4 py-2 border border-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button 
            @click="deleteAccount"
            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  SunIcon, 
  MoonIcon,
  UserIcon
} from '@heroicons/vue/24/outline'

const colorMode = useColorMode()
const showDeleteModal = ref(false)

const profile = ref({
  name: '',
  email: '',
  username: '',
  avatar: '',
  bio: ''
})

const passwords = ref({
  current: '',
  new: ''
})

const setTheme = (theme) => {
  colorMode.preference = theme
}

const saveProfile = () => {
  // Implement save profile logic
  console.log('Saving profile:', profile.value)
}

const confirmDelete = () => {
  showDeleteModal.value = true
}

const deleteAccount = () => {
  // Implement delete account logic
  console.log('Deleting account')
  showDeleteModal.value = false
}
</script>