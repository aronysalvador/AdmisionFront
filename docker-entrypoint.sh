#!/bin/sh
sh reemplaza-envs.sh > /usr/share/nginx/html/config.js && cat window.ambiente="$AMBIENTE" >> /usr/share/nginx/html/config.js
nginx -g "daemon off;"