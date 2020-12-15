#!/bin/sh
case $ENTORNO in
    desarrolloTest) cat env.desarrollo.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    qaTest) cat env.qa.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    stagingTest) cat env.stg.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;
    produccionTest) cat env.prod.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;
    desarrollo) cat env.desarrollo.config.js ;;
    qa) cat env.qa.config.js ;;
    staging) cat env.stg.config.js ;;
    produccion) cat env.prod.config.js ;;
    *) echo "Entorno '$ENTORNO' no valido" ;;
esac