### STAGE 1: Build ###
FROM node:9.11.1 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app


### VARIABLES DE ENTORNO ###
ENV PATH /usr/src/app/node_modules/.bin:$PATH


### VARIABLES DE ENTORNO ###

COPY ../../../package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /usr/src/app

###RUN npm test || exit 1

RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
RUN apk add -U dos2unix
RUN apk add --no-cache -U jq
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY docker-entrypoint.sh reemplazar_envs.sh /
RUN dos2unix reemplazar_envs.sh
RUN chmod +x docker-entrypoint.sh reemplazar_envs.sh
EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]