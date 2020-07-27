import * as Msal from 'msal'

const msalConfig = {
  auth: {
    clientId: "2cc60262-0026-48a5-ac2a-a088e9704f30",
    postLogoutRedirectUri:"https://wa-desa-front-admision.azurewebsites.net",
  },
  cache: {
    cacheLocation: "localStorage",
  },
}

export default new Msal.UserAgentApplication(msalConfig)