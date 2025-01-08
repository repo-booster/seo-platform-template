import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const { domain, region } = await readBody(event)
  
  console.log(`Received domain: ${domain}, region: ${region}`)
  
  return {
    visits: Math.floor(Math.random() * 100000),
    uniqueVisitors: Math.floor(Math.random() * 80000),
    pagesPerVisit: 2.5 + Math.random() * 2,
    bounceRate: Math.floor(Math.random() * 100)
  }
})
