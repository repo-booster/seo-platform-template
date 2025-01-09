// Common Types
export interface PaginationParams {
  limit?: number
  offset?: number
}

export interface DateRangeParams {
  startDate?: string
  endDate?: string
}

// Domain Analytics
export interface DomainOverviewResponse {
  authority: {
    score: number
    trend: number[]
  }
  traffic: {
    organic: number
    paid: number
    total: number
    trend: number[]
  }
  keywords: {
    organic: number
    paid: number
    total: number
    positions: {
      top3: number
      top10: number
      top100: number
    }
  }
  backlinks: {
    total: number
    domains: number
    ips: number
    newLost: {
      new: number
      lost: number
    }
  }
  competitors: {
    organic: string[]
    paid: string[]
  }
}

// Keyword Analytics
export interface KeywordOverviewResponse {
  keyword: string
  searchVolume: number
  difficulty: number
  intent: 'informational' | 'navigational' | 'commercial' | 'transactional'
  cpc: number
  competition: number
  results: number
  trend: number[]
  relatedKeywords: Array<{
    keyword: string
    volume: number
    difficulty: number
  }>
}

// Backlink Analytics
export interface BacklinkOverviewResponse {
  total: number
  domains: {
    total: number
    unique: number
  }
  ips: {
    total: number
    unique: number
  }
  types: {
    text: number
    image: number
    form: number
    frame: number
  }
  attributes: {
    dofollow: number
    nofollow: number
    ugc: number
    sponsored: number
  }
  topDomains: Array<{
    domain: string
    backlinks: number
    authority: number
  }>
}

// Technical SEO
export interface TechnicalSEOResponse {
  issues: {
    critical: Array<{
      type: string
      description: string
      count: number
      urls: string[]
    }>
    warnings: Array<{
      type: string
      description: string
      count: number
      urls: string[]
    }>
    notices: Array<{
      type: string
      description: string
      count: number
      urls: string[]
    }>
  }
  health: {
    score: number
    crawlable: number
    blocked: number
    withIssues: number
  }
  performance: {
    mobile: number
    desktop: number
    core_web_vitals: {
      lcp: number
      fid: number
      cls: number
    }
  }
}

// Content Analysis
export interface ContentAnalysisResponse {
  readability: {
    score: number
    fleschKincaid: number
    issues: Array<{
      type: string
      description: string
      severity: 'high' | 'medium' | 'low'
    }>
  }
  seo: {
    score: number
    issues: Array<{
      type: string
      description: string
      severity: 'high' | 'medium' | 'low'
    }>
  }
  keywords: Array<{
    term: string
    density: number
    count: number
    recommended: number
  }>
  sentiment: {
    score: number
    type: 'positive' | 'neutral' | 'negative'
  }
}