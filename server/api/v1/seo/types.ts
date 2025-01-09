export interface OnPageSEOAnalysis {
  meta_tags: {
    title: {
      content: string
      length: number
      issues: string[]
    }
    description: {
      content: string
      length: number
      issues: string[]
    }
    robots: string
    canonical: string
    og_tags: Record<string, string>
    twitter_tags: Record<string, string>
  }
  content_analysis: {
    word_count: number
    readability: {
      score: number
      grade_level: string
      issues: string[]
    }
    keyword_analysis: Array<{
      keyword: string
      density: number
      count: number
      positions: string[]
      prominence: number
    }>
    heading_structure: Array<{
      tag: string
      content: string
      keywords: string[]
      issues: string[]
    }>
    content_quality: {
      uniqueness: number
      relevance: number
      comprehensiveness: number
      issues: string[]
    }
  }
  technical_seo: {
    loading_speed: {
      mobile: number
      desktop: number
      core_web_vitals: {
        lcp: number
        fid: number
        cls: number
      }
    }
    mobile_friendly: {
      score: number
      issues: string[]
    }
    schema_markup: {
      types: string[]
      validation: {
        valid: boolean
        errors: string[]
      }
    }
    internal_links: {
      count: number
      broken: number
      structure: Array<{
        url: string
        anchor: string
        follow: boolean
      }>
    }
    images: Array<{
      url: string
      alt: string
      size: number
      optimization_potential: number
    }>
  }
}

export interface OffPageSEOAnalysis {
  backlink_profile: {
    overview: {
      total_backlinks: number
      referring_domains: number
      domain_authority: number
      trust_flow: number
      citation_flow: number
    }
    link_quality: {
      dofollow_ratio: number
      average_domain_authority: number
      toxic_links: number
      industry_relevance: number
    }
    anchor_text: Array<{
      text: string
      count: number
      percentage: number
      type: 'branded' | 'exact' | 'partial' | 'generic' | 'url'
    }>
    link_velocity: {
      trend: Array<{
        date: string
        new_links: number
        lost_links: number
      }>
      growth_rate: number
    }
  }
  social_signals: {
    overview: {
      total_shares: number
      engagement_rate: number
      brand_mentions: number
    }
    by_platform: Record<string, {
      shares: number
      likes: number
      comments: number
      reach: number
    }>
    trending_content: Array<{
      url: string
      total_engagement: number
      platforms: string[]
    }>
  }
  brand_presence: {
    mentions: Array<{
      source: string
      date: string
      sentiment: number
      reach: number
      url: string
    }>
    citations: Array<{
      platform: string
      status: 'verified' | 'unverified' | 'incomplete'
      nap_consistency: number
    }>
    reputation: {
      average_rating: number
      total_reviews: number
      sentiment_distribution: {
        positive: number
        neutral: number
        negative: number
      }
    }
  }
}

export interface SEORecommendation {
  category: 'technical' | 'content' | 'backlinks' | 'social' | 'local'
  priority: 'critical' | 'high' | 'medium' | 'low'
  issue: string
  impact: string
  current_status: string
  target_status: string
  implementation: string
  resources_needed: string[]
  estimated_effort: string
}