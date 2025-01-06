<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-8">Contact Us</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
      
      <div>
        <h2 class="text-xl font-semibold mb-4">Other Ways to Connect</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-medium mb-2">Support</h3>
            <p class="text-gray-600">support@repo-booster.com</p>
          </div>
          <div>
            <h3 class="font-medium mb-2">Sales</h3>
            <p class="text-gray-600">sales@repo-booster.com</p>
          </div>
          <div>
            <h3 class="font-medium mb-2">Press</h3>
            <p class="text-gray-600">press@repo-booster.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>