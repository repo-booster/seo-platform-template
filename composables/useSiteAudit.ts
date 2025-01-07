import { ref } from 'vue'

export const useSiteAudit = () => {
  const initialState = {
    issues: {
      critical: 0,
      warnings: 0,
      notices: 0
    },
    seoScore: 0,
    crawlablePages: 0
  }

  const results = ref(null)
  const loading = ref(false)

  const auditSite = async (url: string) => {
    if (!url) {
      return { data: { value: initialState } }
    }

    loading.value = true
    try {
      const response = await useFetch('/api/site-audit/analyze', {
        method: 'POST',
        body: { url }
      })
      results.value = response.data.value
      return response
    } catch (error) {
      console.error('Error auditing site:', error)
      return { data: { value: initialState } }
    } finally {
      loading.value = false
    }
  }

  return {
    results,
    loading,
    auditSite
  }
}