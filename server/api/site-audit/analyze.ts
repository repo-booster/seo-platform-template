import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event)
  
  return {
    issues: {
      critical: 5,
      warnings: 12,
      notices: 8
    },
    seoScore: 85,
    crawlablePages: 150
  }
})