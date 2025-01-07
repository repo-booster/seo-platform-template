export const useAnalytics = () => {
  const getTrafficData = async (startDate: string, endDate: string) => {
    return await useFetch('/api/traffic/analytics', {
      query: { startDate, endDate }
    })
  }

  return {
    getTrafficData
  }
}