import * as Msal from 'msal'

const msalConfig = {
  auth: {
    clientId: window.REACT_APP_MICROSOFT_AUTH_CLIENTID,
    postLogoutRedirectUri: window.REACT_APP_MICROSOFT_AUTH_POSTLOGOUTREDIRECTURL
  },
  cache: {
    cacheLocation: "localStorage"
  }
}

export default new Msal.UserAgentApplication(msalConfig)