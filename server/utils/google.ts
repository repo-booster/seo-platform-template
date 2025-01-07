import { google } from 'googleapis'

export const initializeGoogleAPI = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/analytics.readonly'
    ]
  })
  
  return auth
}

export const searchConsoleAPI = google.searchconsole('v1')
export const analyticsAPI = google.analytics('v3')