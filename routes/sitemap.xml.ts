import { SitemapStream, streamToPromise } from 'nuxt'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({ hostname: 'https://app.repo-booster.com' })

  // Add your routes
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
  sitemap.write({ url: '/domain-overview', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/traffic-analytics', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/niche-traffic', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/market-explorer', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/organic-traffic', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/keyword-research', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/keyword-magic', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/backlink-tools', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/link-building', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/on-page-seo', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/site-audit', changefreq: 'daily', priority: 0.8 })
  sitemap.write({ url: '/local-seo', changefreq: 'daily', priority: 0.8 })

  sitemap.end()

  const xml = await streamToPromise(sitemap)
  event.node.res.setHeader('content-type', 'application/xml')
  return xml.toString()
})