import { defineEventHandler } from 'h3'
import { initializeGoogleAPI, searchConsoleAPI } from '../../utils/google'

export default defineEventHandler(async (event) => {
  const auth = initializeGoogleAPI()
  
  try {
    const response = await searchConsoleAPI.sites.list({
      auth
    })
    
    return response.data
  } catch (error) {
    console.error('Error accessing Search Console:', error)
    return { error: 'Failed to access Search Console' }
  }
})