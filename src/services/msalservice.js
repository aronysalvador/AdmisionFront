import * as Msal from 'msal'

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_MICROSOFT_AUTH_CLIENTID,
    postLogoutRedirectUri:
      process.env.REACT_APP_MICROSOFT_AUTH_POSTLOGOUTREDIRECTURL,
  },
  cache: {
    cacheLocation: process.env.REACT_APP_MICROSOFT_CACHE_CACHELOCATION,
  },
}

export default new Msal.UserAgentApplication(msalConfig)
