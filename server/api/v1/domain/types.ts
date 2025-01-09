export interface DomainMetrics {
  authority: {
    score: number
    trend: number[]
    factors: Array<{
      name: string
      score: number
      impact: 'high' | 'medium' | 'low'
    }>
  }
  traffic: {
    total: number
    organic: number
    paid: number
    trend: number[]
    sources: Array<{
      name: string
      percentage: number
      change: number
    }>
  }
  keywords: {
    total: number
    trend: number[]
    distribution: {
      top3: number
      top10: number
      top50: number
      top100: number
    }
    gainers: Array<{
      keyword: string
      position_change: number
      search_volume: number
    }>
    losers: Array<{
      keyword: string
      position_change: number
      search_volume: number
    }>
  }
  content: {
    total_pages: number
    indexed_pages: number
    content_types: Record<string, number>
    top_performing: Array<{
      url: string
      traffic: number
      keywords: number
      backlinks: number
    }>
  }
  technical: {
    health_score: number
    issues: {
      critical: number
      warnings: number
      notices: number
    }
    performance: {
      mobile_score: number
      desktop_score: number
      core_web_vitals: {
        lcp: number
        fid: number
        cls: number
      }
    }
  }
}

export interface CompetitiveLandscape {
  direct_competitors: Array<{
    domain: string
    overlap_score: number
    shared_keywords: number
    traffic: number
    growth: number
  }>
  market_share: {
    organic: Record<string, number>
    paid: Record<string, number>
  }
  gap_analysis: Array<{
    topic: string
    competitor_coverage: string[]
    opportunity_score: number
  }>
}

export interface DomainOverviewResponse {
  domain: string
  metrics: DomainMetrics
  competitive_landscape: CompetitiveLandscape
  recommendations: Array<{
    category: string
    priority: 'high' | 'medium' | 'low'
    issue: string
    impact: string
    solution: string
  }>
}