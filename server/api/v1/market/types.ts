export interface MarketAnalysisResponse {
  market_overview: {
    size: number
    growth_rate: number
    total_addressable_market: number
    market_share_distribution: Array<{
      company: string
      share_percentage: number
      revenue_estimate: number
    }>
  }
  competitors: Array<{
    domain: string
    metrics: {
      traffic: number
      keywords: number
      backlinks: number
      domain_authority: number
    }
    content_coverage: Array<{
      topic: string
      content_count: number
      avg_word_count: number
      top_performing_urls: string[]
    }>
    social_presence: {
      followers: Record<string, number>
      engagement_rate: number
      posting_frequency: number
    }
    growth_trajectory: {
      traffic_growth: number
      keyword_growth: number
      backlink_growth: number
    }
  }>
  opportunities: {
    content_gaps: Array<{
      topic: string
      search_volume: number
      competition_level: 'low' | 'medium' | 'high'
      estimated_traffic_potential: number
    }>
    keyword_opportunities: Array<{
      keyword: string
      search_volume: number
      difficulty: number
      current_top_competitors: string[]
      estimated_cpc: number
    }>
    underserved_segments: Array<{
      segment: string
      size: number
      current_solutions: string[]
      opportunity_score: number
    }>
  }
  trends: {
    rising_topics: Array<{
      topic: string
      growth_rate: number
      search_volume_trend: number[]
    }>
    seasonal_patterns: Array<{
      topic: string
      peak_months: string[]
      volume_variation: number
    }>
    emerging_technologies: Array<{
      technology: string
      adoption_rate: number
      market_impact: 'low' | 'medium' | 'high'
    }>
  }
}

export interface CompetitorComparisonResponse {
  traffic_comparison: Array<{
    domain: string
    metrics: {
      total_traffic: number
      organic_traffic: number
      paid_traffic: number
      traffic_value: number
    }
    traffic_sources: {
      organic_search: number
      paid_search: number
      social: number
      referral: number
      direct: number
    }
  }>
  keyword_overlap: {
    shared_keywords: number
    unique_keywords: {
      your_site: number
      competitor: number
    }
    top_performing_keywords: Array<{
      keyword: string
      positions: Record<string, number>
      search_volume: number
      difficulty: number
    }>
  }
  content_comparison: {
    content_types: Record<string, number>
    word_count_distribution: {
      average: number
      median: number
      by_type: Record<string, number>
    }
    top_performing_content: Array<{
      url: string
      traffic: number
      keywords: number
      backlinks: number
    }>
  }
}