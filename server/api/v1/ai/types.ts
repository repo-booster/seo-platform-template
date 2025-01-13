export interface SEOPrompt {
  type: 'content' | 'technical' | 'keyword' | 'competitor' | 'strategy'
  context: {
    url?: string
    content?: string
    keywords?: string[]
    competitors?: string[]
    industry?: string
    target_audience?: string
  }
}

export interface SEOAnalysisResponse {
  recommendations: Array<{
    category: string
    priority: 'high' | 'medium' | 'low'
    suggestion: string
    implementation: string
    expected_impact: string
  }>
  insights: {
    strengths: string[]
    weaknesses: string[]
    opportunities: string[]
  }
  action_plan: Array<{
    step: number
    action: string
    timeline: string
    resources_needed: string[]
  }>
}

export interface ContentOptimizationResponse {
  title_suggestions: string[]
  meta_description: string
  heading_structure: Array<{
    level: number
    text: string
    keywords: string[]
  }>
  content_gaps: string[]
  keyword_placement: Array<{
    keyword: string
    suggested_locations: string[]
    density: number
  }>
  readability_improvements: Array<{
    issue: string
    suggestion: string
    impact: string
  }>
}

export interface KeywordResearchResponse {
  primary_keywords: Array<{
    term: string
    relevance: number
    search_intent: string
    difficulty: number
    opportunity: number
  }>
  long_tail_suggestions: Array<{
    phrase: string
    monthly_volume: number
    competition: number
    cpc: number
  }>
  topic_clusters: Array<{
    main_topic: string
    subtopics: string[]
    content_ideas: string[]
  }>
}

export interface CompetitorAnalysisResponse {
  content_gaps: Array<{
    topic: string
    competitor_coverage: string[]
    opportunity_score: number
  }>
  keyword_opportunities: Array<{
    keyword: string
    competitors_ranking: Array<{
      domain: string
      position: number
    }>
    difficulty: number
  }>
  backlink_strategies: Array<{
    source_type: string
    example_sites: string[]
    approach: string
  }>
}