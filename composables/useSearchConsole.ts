export const useSearchConsole = () => {
  const getAuthUrl = async () => {
    const response = await useFetch('/api/search-console/auth')
    return response.data.value
  }

  const getPerformanceData = async (startDate: string, endDate: string, dimensions: string[] = ['query']) => {
    const response = await useFetch('/api/search-console/performance', {
      query: {
        startDate,
        endDate,
        dimensions
      }
    })
    return response.data.value
  }

  const getSites = async () => {
    const response = await useFetch('/api/search-console/sites')
    return response.data.value
  }

  return {
    getAuthUrl,
    getPerformanceData,
    getSites
  }
}