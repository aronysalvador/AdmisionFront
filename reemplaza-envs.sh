#!/bin/sh
case "$ENTORNO" in
    desarrolloTest) cat env.desarrollo.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    qaTest) cat env.qa.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    stagingTest) cat env.stg.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;
    produccionTest) cat env.prod.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;
    
    desarrollo) cat env.desarrollo.config.js > /usr/share/nginx/html/config.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    qa) cat env.qa.config.js > /usr/share/nginx/html/config.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    staging) cat env.stg.config.js > /usr/share/nginx/html/config.js && echo "Cambiando variables de entorno a $ENTORNO";;
    produccion) cat env.prod.config.js > /usr/share/nginx/html/config.js && echo "Cambiando variables de entorno a $ENTORNO";;
    
    *) echo "Entorno '$ENTORNO' no valido" ;;
esac