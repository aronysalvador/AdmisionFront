import * as Msal from 'msal'

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_MICROSOFT_AUTH_CLIENTID,
    postLogoutRedirectUri: process.env.REACT_APP_MICROSOFT_CACHE_CACHELOCATION,
  },
  cache: {
    cacheLocation: "localStorage",
  },
}

export default new Msal.UserAgentApplication(msalConfig)