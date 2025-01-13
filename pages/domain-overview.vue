<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Domain Overview</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Get a comprehensive analysis of any domain's online presence.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <input
          v-model="domain"
          type="text"
          placeholder="Enter domain, subdomain, or URL"
          class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        />
        <button
          @click="analyzeDomain"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2 dark:bg-blue-500 dark:hover:bg-blue-600"
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
          <span v-else>Analyze</span>
        </button>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="results" class="space-y-6">
      <!-- Overview Metrics -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Domain Authority"
          :value="results.authority.score.toString()"
          subtext="Out of 100"
          chart-type="circle"
          :percentage="results.authority.score"
        />
        <MetricCard
          title="Organic Traffic"
          :value="results.traffic.organic.toLocaleString()"
          subtext="Monthly visits"
          chart-type="line"
          :data="results.traffic.trend"
        />
        <MetricCard
          title="Backlinks"
          :value="results.backlinks.total.toLocaleString()"
          subtext="Total backlinks"
          chart-type="line"
          :data="results.backlinks.trend"
        />
        <MetricCard
          title="Keywords"
          :value="results.keywords.total.toLocaleString()"
          subtext="Ranking keywords"
          chart-type="line"
          :data="results.keywords.trend"
        />
      </div>

      <!-- Detailed Stats -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Traffic Sources -->
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-100">Traffic Sources</h2>
          <div class="space-y-4">
            <div
              v-for="source in results.trafficSources"
              :key="source.name"
              class="flex items-center justify-between"
            >
              <div class="flex items-center">
                <component :is="source.icon" class="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
                <span class="text-gray-800 dark:text-gray-100">{{ source.name }}</span>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-gray-600 dark:text-gray-300">{{ source.percentage }}%</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                    :style="{ width: source.percentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Keywords -->
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-100">Top Keywords</h2>
          <div class="space-y-2">
            <div
              v-for="keyword in results.topKeywords"
              :key="keyword.term"
              class="flex items-center justify-between"
            >
              <span class="text-gray-800 dark:text-gray-100">{{ keyword.term }}</span>
              <div class="flex items-center space-x-4">
                <span class="text-gray-600 dark:text-gray-300">
                  Position {{ keyword.position }}
                </span>
                <span
                  :class="keyword.change > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
                >
                  {{ keyword.change > 0 ? '+' : '' }}{{ keyword.change }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const domain = ref('');
const loading = ref(false);
const results = ref(null);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const analyzeDomain = async () => {
  loading.value = true;

  setTimeout(() => {
    results.value = {
      authority: { score: getRandomInt(50, 100) },
      traffic: {
        organic: getRandomInt(10000, 50000),
        trend: Array.from({ length: 12 }, () => getRandomInt(8000, 60000)),
      },
      backlinks: {
        total: getRandomInt(1000, 10000),
        trend: Array.from({ length: 12 }, () => getRandomInt(900, 9500)),
      },
      keywords: {
        total: getRandomInt(1000, 5000),
        trend: Array.from({ length: 12 }, () => getRandomInt(800, 6000)),
      },
      trafficSources: [
        { name: 'Search', percentage: getRandomInt(40, 70), icon: 'SearchIcon' },
        { name: 'Direct', percentage: getRandomInt(20, 50), icon: 'DirectIcon' },
        { name: 'Referral', percentage: getRandomInt(5, 30), icon: 'ReferralIcon' },
        { name: 'Social', percentage: getRandomInt(1, 15), icon: 'SocialIcon' },
      ],
      topKeywords: Array.from({ length: 5 }, () => ({
        term: `Keyword ${getRandomInt(1, 100)}`,
        position: getRandomInt(1, 50),
        change: getRandomInt(-10, 10),
      })),
    };
    loading.value = false;
  }, 2000);
};
</script>
