#!/bin/sh
case "$ENTORNO" in
    desarrollo) cat env.desarrollo.config.js > public/config.js && cat env.desarrollo.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    qa) cat env.qa.config.js > public/config.js && cat env.qa.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    staging) cat env.stg.config.js > public/config.js && cat env.stg.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;
    produccion) cat env.prod.config.js > public/config.js && cat env.prod.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;
    *) echo "still standing" ;;
esac