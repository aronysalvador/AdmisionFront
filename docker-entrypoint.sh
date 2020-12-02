#!/bin/sh
echo "PAIMONNN" > /usr/share/nginx/html/config.js && cat window.ambiente="$AMBIENTE" >> /usr/share/nginx/html/config.js
nginx -g "daemon off;"