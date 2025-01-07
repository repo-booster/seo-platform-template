import { ref } from 'vue'

export const useBacklinks = () => {
  const initialState = {
    totalBacklinks: 0,
    uniqueDomains: 0,
    domainAuthority: 0,
    topLinkingDomains: []
  }

  const results = ref(null)
  const loading = ref(false)

  const analyzeDomain = async (domain: string) => {
    if (!domain) {
      return { data: { value: initialState } }
    }

    loading.value = true
    try {
      const response = await useFetch('/api/backlinks/analyze', {
        method: 'POST',
        body: { domain }
      })
      results.value = response.data.value
      return response
    } catch (error) {
      console.error('Error analyzing backlinks:', error)
      return { data: { value: initialState } }
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