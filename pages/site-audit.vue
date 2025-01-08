<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Site Audit</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Analyze your website for technical SEO issues and get actionable recommendations.
      </p>
      <div class="flex space-x-4">
        <div class="flex-1">
          <input
            v-model="url"
            type="url"
            placeholder="Enter website URL"
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          />
        </div>
        <button
          @click="auditSite"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 flex items-center space-x-2"
        >
          <template v-if="loading">
            <svg
              class="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Analyzing...</span>
          </template>
          <span v-else>Start Audit</span>
        </button>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="results" class="space-y-6">
      <!-- Overview Cards -->
      <div class="grid grid-cols-4 gap-6">
        <MetricCard
          title="SEO Score"
          :value="results.seoScore + '%'"
          subtext="Overall health"
          chart-type="circle"
          :percentage="results.seoScore"
        />
        <MetricCard
          title="Critical Issues"
          :value="results.issues.critical.toString()"
          subtext="Need immediate attention"
          chart-type="line"
          :data="[5, 8, 6, 5, 4, 5, 3]"
        />
        <MetricCard
          title="Warnings"
          :value="results.issues.warnings.toString()"
          subtext="Should be fixed"
          chart-type="line"
          :data="[12, 15, 13, 12, 10, 12, 8]"
        />
        <MetricCard
          title="Notices"
          :value="results.issues.notices.toString()"
          subtext="Consider fixing"
          chart-type="line"
          :data="[8, 10, 9, 8, 7, 8, 6]"
        />
      </div>

      <!-- Issues List -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-100">Issues Found</h2>
        <div class="space-y-4">
          <!-- Critical Issues -->
          <div v-if="results.issues.critical > 0" class="p-4 bg-red-50 dark:bg-red-900 rounded-lg">
            <h3 class="text-red-700 dark:text-red-300 font-medium mb-2">Critical Issues</h3>
            <ul class="list-disc list-inside text-red-600 dark:text-red-400 space-y-1">
              <li>Missing meta descriptions on key pages</li>
              <li>Broken internal links detected</li>
              <li>Duplicate content issues</li>
            </ul>
          </div>

          <!-- Warnings -->
          <div v-if="results.issues.warnings > 0" class="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
            <h3 class="text-yellow-700 dark:text-yellow-300 font-medium mb-2">Warnings</h3>
            <ul class="list-disc list-inside text-yellow-600 dark:text-yellow-400 space-y-1">
              <li>Images missing alt text</li>
              <li>Slow loading pages</li>
              <li>Missing H1 tags</li>
            </ul>
          </div>

          <!-- Notices -->
          <div v-if="results.issues.notices > 0" class="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <h3 class="text-blue-700 dark:text-blue-300 font-medium mb-2">Notices</h3>
            <ul class="list-disc list-inside text-blue-600 dark:text-blue-400 space-y-1">
              <li>Consider adding breadcrumb navigation</li>
              <li>Optimize image sizes</li>
              <li>Add schema markup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSiteAudit } from '~/composables/useSiteAudit'

const { auditSite: runAudit, results, loading } = useSiteAudit()
const url = ref('')

const auditSite = async () => {
  if (!url.value) return
  await runAudit(url.value)
}
</script>
