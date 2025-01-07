import { ref } from 'vue'

export const useDomainOverview = () => {
  const initialState = {
    authority: {
      score: 0,
      trend: [0, 0, 0, 0, 0, 0, 0]
    },
    traffic: {
      organic: 0,
      trend: [0, 0, 0, 0, 0, 0, 0]
    },
    backlinks: {
      total: 0,
      trend: [0, 0, 0, 0, 0, 0, 0]
    },
    keywords: {
      total: 0,
      trend: [0, 0, 0, 0, 0, 0, 0]
    },
    trafficSources: [
      { name: 'Organic Search', percentage: 0, icon: 'MagnifyingGlassIcon' },
      { name: 'Direct', percentage: 0, icon: 'GlobeAltIcon' },
      { name: 'Referral', percentage: 0, icon: 'ShareIcon' },
      { name: 'Social', percentage: 0, icon: 'NewspaperIcon' }
    ],
    topKeywords: []
  }

  const results = ref(null)
  const loading = ref(false)

  const analyzeDomain = async (domain: string) => {
    loading.value = true
    try {
      const response = await useFetch('/api/domain/analyze', {
        method: 'POST',
        body: { domain }
      })
      results.value = response.data.value
    } catch (error) {
      console.error('Error analyzing domain:', error)
      results.value = initialState
    } finally {
      loading.value = false
    }
  }

  return {
    results,
    loading,
    analyzeDomain
  }
}