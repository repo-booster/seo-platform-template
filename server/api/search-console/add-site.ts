import { defineEventHandler } from 'h3'
import { oauth2Client, searchconsole } from '../../utils/searchConsole'

export default defineEventHandler(async (event) => {
  const { siteUrl } = await readBody(event)

  try {
    const response = await searchconsole.sites.add({
      siteUrl,
      auth: oauth2Client
    })

    return { success: true, data: response.data }
  } catch (error) {
    console.error('Error adding site:', error)
    return { success: false, error: 'Failed to add site' }
  }
})