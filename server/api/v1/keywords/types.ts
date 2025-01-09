export interface KeywordSuggestion {
  keyword: string
  search_volume: number
  difficulty: number
  cpc: number
  competition: number
  intent: 'informational' | 'navigational' | 'commercial' | 'transactional'
  trend: number[]
}

export interface KeywordMagicResponse {
  suggestions: KeywordSuggestion[]
  metrics: {
    total_results: number
    total_volume: number
    avg_difficulty: number
    avg_cpc: number
  }
  groups: Array<{
    group: string
    count: number
    volume: number
  }>
  questions: Array<{
    question: string
    search_volume: number
    difficulty: number
  }>
  related: Array<{
    keyword: string
    relevance: number
    search_volume: number
  }>
}

export interface KeywordResearchResponse {
  overview: {
    total_keywords: number
    total_volume: number
    difficulty_distribution: {
      easy: number
      medium: number
      hard: number
    }
    intent_distribution: {
      informational: number
      navigational: number
      commercial: number
      transactional: number
    }
  }
  keywords: Array<{
    keyword: string
    search_volume: number
    difficulty: number
    cpc: number
    current_rank: number | null
    url_ranking: string | null
    serp_features: string[]
    intent: 'informational' | 'navigational' | 'commercial' | 'transactional'
    trend: number[]
  }>
  competitors: Array<{
    domain: string
    keywords_count: number
    overlap: number
    top_keywords: Array<{
      keyword: string
      position: number
      url: string
    }>
  }>
  opportunities: Array<{
    keyword: string
    search_volume: number
    difficulty: number
    estimated_traffic: number
    ranking_potential: number
  }>
}

export interface KeywordDifficultyResponse {
  score: number
  interpretation: string
  factors: Array<{
    name: string
    impact: number
    description: string
  }>
  serp_analysis: Array<{
    position: number
    url: string
    domain_authority: number
    page_authority: number
    backlinks: number
  }>
  recommendations: Array<{
    factor: string
    current_status: string
    recommendation: string
    priority: 'high' | 'medium' | 'low'
  }>
}