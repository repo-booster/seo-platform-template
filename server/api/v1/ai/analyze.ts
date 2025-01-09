import { defineEventHandler } from 'h3'
import OpenAI from 'openai'
import { seoDataset } from './dataset'
import type { SEOPrompt, SEOAnalysisResponse } from './types'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  if (!config.openaiApiKey) {
    throw createError({
      statusCode: 500,
      message: 'OpenAI API key not configured'
    })
  }

  const openai = new OpenAI({
    apiKey: config.openaiApiKey
  })

  const body = await readBody(event) as SEOPrompt
  
  if (!body.type || !body.context) {
    throw createError({
      statusCode: 400,
      message: 'Invalid request parameters'
    })
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `You are an expert SEO analyst with deep knowledge of search engine optimization. 
          Use the following SEO dataset for context: ${JSON.stringify(seoDataset)}
          
          Analyze the provided content and context to provide detailed SEO recommendations.
          Focus on actionable insights and specific improvements.`
        },
        {
          role: "user",
          content: `Analyze the following for ${body.type} optimization:
          ${JSON.stringify(body.context)}`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })

    const response = completion.choices[0].message.content
    
    // Parse and structure the response
    const structuredResponse: SEOAnalysisResponse = {
      recommendations: [],
      insights: {
        strengths: [],
        weaknesses: [],
        opportunities: []
      },
      action_plan: []
    }

    try {
      const parsed = JSON.parse(response)
      return parsed
    } catch {
      // If parsing fails, return the raw response with basic structure
      structuredResponse.recommendations.push({
        category: 'general',
        priority: 'high',
        suggestion: response,
        implementation: 'Review and implement the suggestions above',
        expected_impact: 'Improved search engine rankings and visibility'
      })
      return structuredResponse
    }
  } catch (error) {
    console.error('OpenAI API Error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to analyze content'
    })
  }
})