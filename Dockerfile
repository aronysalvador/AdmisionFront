### STAGE 1: Build ###
FROM node:9.11.1 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app


### VARIABLES DE ENTORNO ###
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG urlOrquestador=default
ARG idAzure=default
ARG app=default
ENV REACT_APP_ISAPRES=$urlOrquestador/api/sap/isapres/
ENV REACT_APP_AFP=$urlOrquestador/api/sap/afp/
ENV REACT_APP_NACIONALIDADES=$urlOrquestador/api/datosPaciente/nacionalidades/
ENV REACT_APP_IDIOMAS=$urlOrquestador/api/datosPaciente/idiomas/
ENV REACT_APP_PAISES=$urlOrquestador/api/datosPaciente/paises/
ENV REACT_APP_CATEGORIA_OCUPACIONAL=$urlOrquestador/api/sap/categoriaOcupacional/
ENV REACT_APP_TIPO_CONTRATO=$urlOrquestador/api/sap/tipoContrato/
ENV REACT_APP_JORNADA_TRABAJO=$urlOrquestador/api/sap/jornadaTrabajo/
ENV REACT_APP_TIPO_REMUNERACIONES=$urlOrquestador/api/sap/tipoRemuneracion/
ENV REACT_APP_COMUNA=$urlOrquestador/api/sap/comunas
ENV REACT_APP_SUCURSALES=$urlOrquestador/api/sap/sucursales
ENV REACT_APP_CENTROSACHS=$urlOrquestador/api/sap/centros
ENV REACT_APP_PROFESION=$urlOrquestador/api/sap/profesiones
ENV REACT_APP_ALERTAS=$urlOrquestador/api/sap/alertas
ENV REACT_APP_RAZONSOCIAL=$urlOrquestador/api/sap/razonSocialByName?companyName=
ENV REACT_APP_CENTER_USER=$urlOrquestador/api/sap/centrosUser
ENV REACT_APP_LOG=$urlOrquestador/api/logs/
ENV REACT_APP_RAZON_SOCIAL_RUT=$urlOrquestador/api/sap/razonSocialByRut?rut=
ENV REACT_APP_VALIDAR_DATA_EMPRESA=$urlOrquestador/api/paciente/
ENV REACT_APP_VALIDAR_DATA_PACIENTE=$urlOrquestador/api/paciente/getPaciente
ENV REACT_APP_INTEGRACION_SAP=$urlOrquestador/api/sap/integracionsap
ENV REACT_APP_HOMOLOGACION=$urlOrquestador/api/admisionista/getAliasSapByEmail
ENV REACT_APP_GEO_AUTOCOMPLETE=$urlOrquestador/api/geo/autocompletarDirecciones
ENV REACT_APP_GEO_STATICMAP=$urlOrquestador/api/geo/getMapaEstatico
ENV REACT_APP_GEO_LATLNG=$urlOrquestador/api/geo/getLatLng
ENV REACT_APP_GEO_DIRECTION=$urlOrquestador/api/geo/getDireccion
ENV REACT_APP_MICROSOFT_AUTH_CLIENTID=$idAzure
ENV REACT_APP_MICROSOFT_AUTH_POSTLOGOUTREDIRECTURL=https://$app.azurewebsites.net
### VARIABLES DE ENTORNO ###

COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /usr/src/app

###RUN npm test || exit 1

RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]