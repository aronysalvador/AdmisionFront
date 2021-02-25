import { Client } from '@microsoft/microsoft-graph-client'

function getAuthenticatedClient(accessToken) {
  // Initialize Graph client
  const client = Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: done => {
      done(null, accessToken.accessToken)
    }
  })

  return client
}

export default async function getUserDetails(accessToken) {
  const client = getAuthenticatedClient(accessToken)

  const user = await client.api('/me').get()

  return user
}