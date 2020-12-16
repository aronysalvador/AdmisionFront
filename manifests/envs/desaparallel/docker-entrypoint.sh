#!/bin/sh
./reemplazar_envs.sh > /usr/share/nginx/html/config.js
nginx -g "daemon off;"