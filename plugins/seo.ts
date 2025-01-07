export default defineNuxtPlugin(() => {
    const pageMeta = {
      '/': {
        title: 'SEO Analytics Dashboard',
        description: 'Get a comprehensive overview of your website\'s SEO performance with Repo-Booster\'s analytics dashboard.'
      },
      '/domain-overview': {
        title: 'Domain Overview & Analysis',
        description: 'Analyze any domain\'s online presence, traffic, and SEO metrics with detailed insights and competitor comparison.'
      },
      '/traffic-analytics': {
        title: 'Traffic Analytics',
        description: 'Deep dive into your website traffic patterns, user behavior, and engagement metrics.'
      },
      '/niche-traffic': {
        title: 'Industry Traffic Analysis',
        description: 'Analyze traffic patterns across different industries and benchmark against competitors.'
      },
      '/market-explorer': {
        title: 'Market Explorer',
        description: 'Research and analyze market opportunities, identify competitors, and track industry trends.'
      },
      '/organic-traffic': {
        title: 'Organic Traffic Insights',
        description: 'Track and analyze your organic search traffic, rankings, and keyword performance.'
      },
      '/keyword-research': {
        title: 'Keyword Research Tool',
        description: 'Discover high-performing keywords and optimize your content strategy with our advanced keyword research tools.'
      },
      '/keyword-magic': {
        title: 'Keyword Magic Tool',
        description: 'Find millions of keyword ideas and opportunities with our comprehensive keyword suggestion tool.'
      },
      '/backlink-tools': {
        title: 'Backlink Analytics',
        description: 'Analyze your backlink profile, track new links, and identify link building opportunities.'
      },
      '/link-building': {
        title: 'Link Building Tools',
        description: 'Discover and track link building opportunities to improve your website\'s authority.'
      },
      '/on-page-seo': {
        title: 'On-Page SEO Checker',
        description: 'Optimize your web pages with actionable on-page SEO recommendations and best practices.'
      },
      '/site-audit': {
        title: 'Site Audit Tool',
        description: 'Comprehensive technical SEO audit to identify and fix issues affecting your website\'s performance.'
      },
      '/local-seo': {
        title: 'Local SEO Tools',
        description: 'Optimize your local search presence and manage business listings across the web.'
      }
    }
  
    addRouteMiddleware('seo', (to) => {
      const meta = pageMeta[to.path]
      if (meta) {
        useHead({
          title: meta.title,
          meta: [
            { name: 'description', content: meta.description },
            { property: 'og:title', content: `${meta.title} | Repo-Booster` },
            { property: 'og:description', content: meta.description },
            { name: 'twitter:title', content: `${meta.title} | Repo-Booster` },
            { name: 'twitter:description', content: meta.description }
          ]
        })
      }
    })
  })