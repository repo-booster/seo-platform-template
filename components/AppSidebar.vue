<template>
  <aside class="flex-shrink-0 w-64 bg-gray-50 dark:bg-gray-900 shadow-sm">
    <nav class="p-4 space-y-1">
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.href"
        class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        :class="[ 
          $route.path === item.href
            ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
        ]"
      >
        <component
          :is="item.icon"
          class="mr-3 h-5 w-5"
          :class="[ 
            $route.path === item.href
              ? 'text-blue-500 dark:text-blue-300'
              : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
          ]"
        />
        {{ item.name }}
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
import {
  HomeIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  DocumentTextIcon,
  MapIcon,
  SparklesIcon,
  SignalIcon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  RocketLaunchIcon,
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  ChartPieIcon,
  GlobeAltIcon,
  BeakerIcon,
  ChartBarSquareIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ArrowsPointingInIcon,
  BellAlertIcon,
  SpeakerWaveIcon,
  AcademicCapIcon
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'SEO Dashboard', href: '/', icon: HomeIcon },
  { name: 'Domain Overview', href: '/domain-overview', icon: ChartBarIcon },
  { name: 'Traffic Analytics', href: '/traffic-analytics', icon: ChartBarIcon },
  { name: 'Industry Traffic', href: '/niche-traffic', icon: ChartPieIcon },
  { name: 'Organic Traffic', href: '/organic-traffic', icon: SignalIcon },
  { name: 'Market Explorer', href: '/market-explorer', icon: GlobeAltIcon },
  { name: 'Keyword Research', href: '/keyword-research', icon: MagnifyingGlassIcon },
  { name: 'Keyword Magic Tool', href: '/keyword-magic', icon: SparklesIcon },
  { name: 'Rank Booster', href: '/rank-booster', icon: RocketLaunchIcon },
  { name: 'SEO Assistant', href: '/seo-assistant', icon: ChatBubbleBottomCenterTextIcon },
  { name: 'Website Performance', href: '/website-performance', icon: BoltIcon },
  { name: 'Backlink Tools', href: '/backlink-tools', icon: LinkIcon },
  { name: 'Link Building', href: '/link-building', icon: BuildingLibraryIcon },
  { name: 'On-Page SEO', href: '/on-page-seo', icon: ClipboardDocumentCheckIcon },
  { name: 'Listing Management', href: '/listing-management', icon: BuildingStorefrontIcon },
  { name: 'Site Audit', href: '/site-audit', icon: DocumentTextIcon },
  { name: 'Local SEO', href: '/local-seo', icon: MapIcon },
  { name: 'Position Tracking', href: '/position-tracking', icon: ChartBarIcon },
  { name: 'Log File Analyzer', href: '/log-file-analyzer', icon: DocumentMagnifyingGlassIcon },
  { name: 'Data Collection & Analysis', href: '/ai/data-collection', icon: BeakerIcon },
  { name: 'Keyword Forecasting', href: '/ai/keyword-forecasting', icon: ChartBarSquareIcon },
  { name: 'Predictive ROI', href: '/ai/predictive-roi', icon: CurrencyDollarIcon },
  { name: 'Competitive Analysis', href: '/ai/competitive-analysis', icon: UserGroupIcon },
  { name: 'Conversion Attribution', href: '/ai/conversion-attribution', icon: ArrowsPointingInIcon },
  { name: 'Content ROI', href: '/ai/content-roi', icon: DocumentTextIcon },
  { name: 'Automated Reporting', href: '/ai/automated-reporting', icon: BellAlertIcon },
  { name: 'Sentiment Analysis', href: '/ai/sentiment-analysis', icon: ChatBubbleBottomCenterTextIcon },
  { name: 'Voice & Visual Search', href: '/ai/voice-visual-search', icon: SpeakerWaveIcon },
  { name: 'Continuous Learning', href: '/ai/continuous-learning', icon: AcademicCapIcon }
]
</script>

<style scoped>
html,
body {
  height: 100%;
}
</style>