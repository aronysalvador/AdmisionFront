import * as Msal from 'msal'

/*
# En este archivo se setean las variables de entornos comunes
# de la aplicación.


# Titulo principal de la aplicación
REACT_APP_TITLE = "Firma Digital Personas"


# Configuración de autenticación del package msal.
REACT_APP_MICROSOFT_AUTH_CLIENTID = "4e942a7f-082a-4293-9e67-02049d21697b"
REACT_APP_MICROSOFT_AUTH_POSTLOGOUTREDIRECTURL = "https://firmadigital.achs.cl/"

REACT_APP_MICROSOFT_CACHE_CACHELOCATION = "localStorage"

REACT_APP_MICROSOFT_SCOPES = "user.read"*/

const msalConfig = {
  auth: {
    clientId: "4e942a7f-082a-4293-9e67-02049d21697b",
    postLogoutRedirectUri:
    "https://firmadigital.achs.cl/",
  },
  cache: {
    cacheLocation: "localStorage",
  },
}

export default new Msal.UserAgentApplication(msalConfig)