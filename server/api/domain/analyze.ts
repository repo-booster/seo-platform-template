import { defineEventHandler } from 'h3'
import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const { domain } = await readBody(event)
  
  if (!domain) {
    throw createError({
      statusCode: 400,
      message: 'Domain is required'
    })
  }

  try {
    // Initialize the Google API client
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_API_KEY,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    })

    const searchConsole = google.searchconsole('v1')

    // Get the last 30 days of data
    const endDate = new Date().toISOString().split('T')[0]
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    const searchData = await searchConsole.searchanalytics.query({
      auth,
      siteUrl: `https://${domain}`,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 10
      }
    })

    const rows = searchData.data.rows || []
    
    return {
      authority: {
        score: 0,
        trend: Array(7).fill(0)
      },
      traffic: {
        organic: rows.reduce((sum, row) => sum + (row.clicks || 0), 0),
        trend: rows.map(row => row.clicks || 0).slice(0, 7)
      },
      backlinks: {
        total: 0,
        trend: Array(7).fill(0)
      },
      keywords: {
        total: rows.length,
        trend: Array(7).fill(0)
      },
      trafficSources: [
        { name: 'Organic Search', percentage: 100, icon: 'MagnifyingGlassIcon' },
        { name: 'Direct', percentage: 0, icon: 'GlobeAltIcon' },
        { name: 'Referral', percentage: 0, icon: 'ShareIcon' },
        { name: 'Social', percentage: 0, icon: 'NewspaperIcon' }
      ],
      topKeywords: rows.map(row => ({
        term: row.keys[0],
        position: row.position || 0,
        change: 0
      }))
    }
  } catch (error) {
    console.error('Error analyzing domain:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to analyze domain'
    })
  }
})