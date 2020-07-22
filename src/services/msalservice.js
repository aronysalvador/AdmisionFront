import * as Msal from 'msal'

const msalConfig = {
  auth: {
    clientId: "4e942a7f-082a-4293-9e67-02049d21697b",
    postLogoutRedirectUri:"https://wa-desa-front-admision.azurewebsites.net",
  },
  cache: {
    cacheLocation: "localStorage",
  },
}

export default new Msal.UserAgentApplication(msalConfig)