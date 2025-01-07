import { ref } from 'vue'

export const useKeywordMagic = () => {
  const results = ref([])
  const loading = ref(false)

  const searchKeywords = async (query: string, region: string) => {
    if (!query || !region) {
      results.value = []
      return
    }

    loading.value = true
    try {
      const response = await useFetch('/api/keyword-magic/search', {
        method: 'POST',
        body: { query, region }
      })
      results.value = response.data.value
    } catch (error) {
      console.error('Error searching keywords:', error)
      results.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    results,
    loading,
    searchKeywords
  }
}