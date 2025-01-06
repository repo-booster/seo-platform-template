<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="bg-white p-8 rounded-lg shadow text-center">
      <h1 class="text-xl font-semibold mb-4">Log File Analyzer</h1>
      <p class="text-gray-600 mb-8">We're offering you an exclusive opportunity to try our new tool that will give you an exact understanding of how search engines are interacting with your website. Be the first to try it!</p>
      
      <!-- File Upload Area -->
      <div class="border-2 border-dashed border-gray-300 rounded-lg p-12 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <ArrowUpTrayIcon class="h-12 w-12 text-gray-400" />
          </div>
          <p class="text-gray-600 mb-2">Drag & drop your log files* here</p>
          <p class="text-xs text-gray-500 mb-4">*Access log files, uncompressed, max 75MB in size.</p>
          <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Browse for log files
          </button>
        </div>
      </div>
      
      <p class="text-xs text-gray-500 mt-4">
        We need information from your log files in order to provide you with analysis services at the will of the Log Analyzer. You don't need to provide any personal information to use select services in our tool.
      </p>
    </div>

    <!-- Rest of existing content -->
    <div class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-6">Advantages of Log File Analysis</h2>
      <!-- ... rest of content ... -->
    </div>

    <!-- How To Section -->
    <div class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-8">How to analyze log files with Log File Analyzer</h2>
      
      <!-- Steps -->
      <div class="space-y-12">
        <div class="flex">
          <div class="mr-6 flex-1">
            <div class="text-sm font-medium text-gray-500">Step 1</div>
            <h3 class="font-medium text-lg mb-2">Download log files from your site</h3>
            <p class="text-gray-600">To download your log files (access.log), you need to access your web server via an FTP client. Log files are usually located in the "logs" or "access_log" folder.</p>
            <button 
              @click="showInstructions = true"
              class="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
              Need instructions?
            </button>
          </div>
          <div class="flex-shrink-0">
            <CloudArrowDownIcon class="h-24 w-24 text-blue-100" />
          </div>
        </div>

        <!-- ... rest of steps ... -->
      </div>
    </div>

    <!-- Instructions Modal -->
    <UModal v-model="showInstructions">
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">How to Download Log Files</h3>
        
        <div class="space-y-6">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-medium">1</span>
            </div>
            <div>
              <h4 class="font-medium mb-1">Connect to Your Server</h4>
              <p class="text-gray-600">Use an FTP client (like FileZilla) to connect to your web server using your hosting credentials.</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-medium">2</span>
            </div>
            <div>
              <h4 class="font-medium mb-1">Locate Log Files</h4>
              <p class="text-gray-600">Navigate to the "logs" or "access_log" directory. Common paths include:</p>
              <ul class="mt-2 space-y-1 text-sm text-gray-600">
                <li>• /var/log/apache2/</li>
                <li>• /var/log/nginx/</li>
                <li>• /var/log/httpd/</li>
              </ul>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-medium">3</span>
            </div>
            <div>
              <h4 class="font-medium mb-1">Download Files</h4>
              <p class="text-gray-600">Download the access.log file to your local computer. If you can't find the logs, contact your hosting provider for assistance.</p>
            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <button 
            @click="showInstructions = false"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Got it
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  ArrowUpTrayIcon,
  DocumentMagnifyingGlassIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  CogIcon,
  CloudArrowDownIcon,
  DocumentChartBarIcon
} from '@heroicons/vue/24/outline'

const showInstructions = ref(false)
</script>