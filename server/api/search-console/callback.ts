import { defineEventHandler } from 'h3'
import { google } from 'googleapis'

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
)

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { code } = query

  try {
    const { tokens } = await oauth2Client.getToken(code as string)
    oauth2Client.setCredentials(tokens)
    
    // Store tokens securely - in production use a proper database
    // This is just for demonstration
    process.env.GOOGLE_ACCESS_TOKEN = tokens.access_token
    process.env.GOOGLE_REFRESH_TOKEN = tokens.refresh_token
    
    return { success: true }
  } catch (error) {
    console.error('Error getting tokens:', error)
    return { success: false, error: 'Failed to authenticate' }
  }
})