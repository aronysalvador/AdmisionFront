### STAGE 1: Build ###
FROM node:14.16.0 as build
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
FROM nginx:1.19.6-alpine
RUN apk --no-cache -U upgrade
# RUN apk add -U dos2unix=7.4.2-r0
RUN apk add dos2unix=7.4.2-r0 --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted
COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY docker-entrypoint.sh reemplaza-envs.sh /
RUN dos2unix reemplaza-envs.sh
COPY *.config.js /
RUN chmod +x docker-entrypoint.sh reemplaza-envs.sh
EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]
