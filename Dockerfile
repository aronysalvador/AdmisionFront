### STAGE 1: Build ###
FROM node:9.11.1 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

### VARIABLES DE ENTORNO ###
ENV PATH /usr/src/app/node_modules/.bin:$PATH

### VARIABLES DE ENTORNO ###

COPY package*.json /usr/src/app/
# RUN npm install --silent
# COPY . .
COPY . /usr/src/app

###RUN npm test || exit 1
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
RUN apk add -U dos2unix
COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY docker-entrypoint.sh reemplaza-envs.sh /
RUN dos2unix reemplaza-envs.sh
COPY *.config.js /
RUN chmod +x docker-entrypoint.sh reemplaza-envs.sh
EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]