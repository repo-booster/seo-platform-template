import { google } from 'googleapis'

// Create a singleton instance
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
)

const searchconsole = google.searchconsole('v1')

export { oauth2Client, searchconsole }