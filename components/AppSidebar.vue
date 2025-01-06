<template>
  <aside class="w-64 bg-white dark:bg-gray-800 shadow-sm h-[calc(100vh-4rem)]">
    <nav class="p-4 space-y-1">
      <NuxtLink v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === item.href
                    ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                ]">
        <component :is="item.icon" 
                  class="mr-3 h-5 w-5"
                  :class="[
                    $route.path === item.href
                      ? 'text-blue-500 dark:text-blue-300'
                      : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                  ]" />
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
  ChartPieIcon
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'SEO Dashboard', href: '/', icon: HomeIcon },
  { name: 'Domain Overview', href: '/domain-overview', icon: ChartBarIcon },
  { name: 'Traffic Analytics', href: '/traffic-analytics', icon: ChartBarIcon },
  { name: 'Industry Traffic', href: '/niche-traffic', icon: ChartPieIcon },
  { name: 'Organic Traffic', href: '/organic-traffic', icon: SignalIcon },
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
  { name: 'Log File Analyzer', href: '/log-file-analyzer', icon: DocumentMagnifyingGlassIcon }
]
</script>