import { defineEventHandler } from 'h3'
import { google } from 'googleapis'

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
)

const searchconsole = google.searchconsole('v1')

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { startDate, endDate, dimensions = ['query'] } = query

  try {
    oauth2Client.setCredentials({
      access_token: process.env.GOOGLE_ACCESS_TOKEN,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    })

    const response = await searchconsole.searchanalytics.query({
      siteUrl: process.env.SITE_URL,
      requestBody: {
        startDate: startDate as string,
        endDate: endDate as string,
        dimensions: dimensions as string[],
        rowLimit: 1000
      },
      auth: oauth2Client
    })

    return response.data
  } catch (error) {
    console.error('Error fetching search console data:', error)
    return { error: 'Failed to fetch data' }
  }
})