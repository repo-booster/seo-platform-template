import { ref } from 'vue'

export const useKeywordResearch = () => {
  const searchConsole = useSearchConsole()
  const keywords = ref([])
  const loading = ref(false)

  const analyzeKeywords = async (query: string) => {
    loading.value = true
    try {
      // Get last 3 months of data
      const endDate = new Date().toISOString().split('T')[0]
      const startDate = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      
      const searchData = await searchConsole.getPerformanceData(
        startDate,
        endDate,
        ['query', 'page', 'country']
      )

      keywords.value = searchData.rows?.map(row => ({
        keyword: row.keys[0],
        page: row.keys[1],
        country: row.keys[2],
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr,
        position: row.position
      })) || []

    } catch (error) {
      console.error('Error analyzing keywords:', error)
    } finally {
      loading.value = false
    }
  }

  return {
    keywords,
    loading,
    analyzeKeywords
  }
}