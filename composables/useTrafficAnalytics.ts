import { ref } from 'vue'

export const useTrafficAnalytics = () => {
  const initialState = {
    visits: 0,
    uniqueVisitors: 0,
    pagesPerVisit: 0,
    bounceRate: 0
  }

  const results = ref(null)
  const loading = ref(false)

  const analyzeTraffic = async (domain: string, region: string) => {
    if (!domain) {
      results.value = initialState
      return
    }

    loading.value = true
    try {
      const response = await useFetch('/api/traffic/analyze', {
        method: 'POST',
        body: { domain, region }
      })
      results.value = response.data.value
    } catch (error) {
      console.error('Error analyzing traffic:', error)
      results.value = initialState
    } finally {
      loading.value = false
    }
  }

  return {
    results,
    loading,
    analyzeTraffic
  }
}