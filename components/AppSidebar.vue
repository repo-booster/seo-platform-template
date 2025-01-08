<template>
  <aside class="w-64 bg-white dark:bg-gray-800 shadow-lg h-[calc(100vh-4rem)] overflow-y-auto">
    <nav class="p-4 space-y-6">
      <!-- Dashboard Section -->
      <div>
        <div class="px-3 mb-2 text-xs font-bold text-black-400 uppercase tracking-wider">
          Dashboard
        </div>
        <div class="space-y-1">
          <NuxtLink 
            v-for="item in mainNavigation" 
            :key="item.href" 
            :to="item.href" 
            class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
            :class="$route.path === item.href ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'">
            <component :is="item.icon" class="w-5 h-5 mr-3" />
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>

      <!-- SEO Tools Section -->
      <div>
        <div class="px-3 mb-2 text-xs font-bold text-black-400 uppercase tracking-wider">
          SEO Tools
        </div>
        <div class="space-y-1">
          <NuxtLink 
            v-for="tool in seoTools" 
            :key="tool.href" 
            :to="tool.href" 
            class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
            :class="$route.path === tool.href ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'">
            <component :is="tool.icon" class="w-5 h-5 mr-3" />
            {{ tool.name }}
          </NuxtLink>
        </div>
      </div>

      <!-- Traffic Tools Section -->
      <div>
        <div class="px-3 mb-2 text-xs font-bold text-black-400 uppercase tracking-wider">
          Traffic Tools
        </div>
        <div class="space-y-1">
          <NuxtLink 
            v-for="tool in trafficTools" 
            :key="tool.href" 
            :to="tool.href" 
            class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
            :class="$route.path === tool.href ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'">
            <component :is="tool.icon" class="w-5 h-5 mr-3" />
            {{ tool.name }}
          </NuxtLink>
        </div>
      </div>

      <!-- AI Tools Section -->
      <div>
        <div class="px-3 mb-2 text-xs font-bold text-black-400 uppercase tracking-wider">
          AI Tools
          <UBadge icon="i-lucide-sparkles" size="xs" color="primary" variant="solid">PRO</UBadge>
        </div>
        <div class="space-y-1">
          <NuxtLink 
            v-for="tool in aiTools" 
            :key="tool.path" 
            :to="tool.path" 
            class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
            :class="$route.path === tool.path ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'">
            <component :is="tool.icon" class="w-5 h-5 mr-3" />
            {{ tool.name }}
          </NuxtLink>
        </div>
      </div>

      <!-- Support Section -->
      <div>
        <div class="px-3 mb-2 text-xs font-bold text-black-400 uppercase tracking-wider">
          Support
        </div>
        <div class="space-y-1">
          <a href="#" class="flex items-center px-3 py-2 text-sm rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <QuestionMarkCircleIcon class="w-5 h-5 mr-3" />
            Help Center
          </a>
          <a href="#" class="flex items-center px-3 py-2 text-sm rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <ChatBubbleLeftRightIcon class="w-5 h-5 mr-3" />
            Contact Support
          </a>
        </div>
      </div>
    </nav>

    <!-- Premium Features Banner -->
    <div class="p-4">
      <div class="p-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <SparklesIcon class="w-8 h-8 mb-2" />
        <h3 class="font-medium mb-1">Upgrade to Pro</h3>
        <p class="text-sm text-blue-100 mb-3">Get access to advanced AI features</p>
        <button class="w-full px-3 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
          Upgrade Now
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import {
  HomeIcon,
  FolderIcon,
  ChartBarIcon,
  ChartPieIcon,
  MagnifyingGlassIcon,
  SignalIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  LinkIcon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  MapIcon,
  BoltIcon,
  ArrowPathIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ChatBubbleBottomCenterTextIcon,
  SpeakerWaveIcon,
  CursorArrowRaysIcon,
  PresentationChartLineIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/vue/24/outline'

const mainNavigation = [
  { name: 'SEO Dashboard', href: '/', icon: HomeIcon },
  { name: 'Projects', href: '/projects', icon: FolderIcon },
  { name: 'SEO-GPT', href: '/seo-assistant', icon: SparklesIcon },

]

const seoTools = [
  { name: 'Domain Overview', href: '/domain-overview', icon: ChartBarIcon },
  { name: 'Link Building', href: '/link-building', icon: BuildingLibraryIcon },
  { name: 'Market Explorer', href: '/market-explorer', icon: GlobeAltIcon },
  { name: 'Keyword Research', href: '/keyword-research', icon: MagnifyingGlassIcon },
  { name: 'Keyword Magic Tool', href: '/keyword-magic', icon: SparklesIcon },
  { name: 'On-Page SEO', href: '/on-page-seo', icon: ClipboardDocumentCheckIcon },
  { name: 'Backlink Tools', href: '/backlink-tools', icon: LinkIcon },
  { name: 'Local SEO', href: '/local-seo', icon: MapIcon },
  { name: 'Site Audit', href: '/site-audit', icon: DocumentMagnifyingGlassIcon },
  { name: 'Website Performance', href: '/website-performance', icon: ChartBarIcon },
  { name: 'Listing Management', href: '/listing-management', icon: BuildingStorefrontIcon },
]

const trafficTools = [
  { name: 'Traffic Analytics', href: '/traffic-analytics', icon: ChartBarIcon },
  { name: 'Industry Traffic', href: '/niche-traffic', icon: ChartPieIcon },
  { name: 'Organic Traffic', href: '/organic-traffic', icon: SignalIcon },
  { name: 'Log File Analyzer', href: '/log-file-analyzer', icon: DocumentMagnifyingGlassIcon },
  { name: 'Rank Booster', href: '/rank-booster', icon: ChartBarIcon },
]

const aiTools = [
  { name: 'Data Collection', path: '/ai/data-collection', icon: BeakerIcon },
  { name: 'Keyword Forecasting', path: '/ai/keyword-forecasting', icon: PresentationChartLineIcon },
  { name: 'Predictive ROI', path: '/ai/predictive-roi', icon: ChartBarIcon },
  { name: 'Competitive Analysis', path: '/ai/competitive-analysis', icon: MagnifyingGlassIcon },
  { name: 'Content ROI', path: '/ai/content-roi', icon: DocumentTextIcon },
  { name: 'Automated Reporting', path: '/ai/automated-reporting', icon: BoltIcon },
  { name: 'Sentiment Analysis', path: '/ai/sentiment-analysis', icon: ChatBubbleBottomCenterTextIcon },
  { name: 'Voice & Visual Search', path: '/ai/voice-visual-search', icon: SpeakerWaveIcon },
  { name: 'Continuous Learning', path: '/ai/continuous-learning', icon: ArrowPathIcon },
]
</script>
