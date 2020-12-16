#!/bin/sh
case $ENTORNO in
    desarrolloTest) cat env.desarrollo.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    ParallelDesarrolloTest) echo "import '@testing-library/jest-dom/extend-expect';" > src/setupTests.js && cat env.desaparallel.config.js >> src/setupTests.js && sed -i "s?sprintName?$nombreSprint?g" src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;    
    ParallelDesarrollo) sed -i "s?sprintName?$nombreSprint?g" env.desaparallel.config.js && cat env.desaparallel.config.js ;;
    qaTest) cat env.qa.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO" ;;
    stagingTest) cat env.stg.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;
    produccionTest) cat env.prod.config.js > src/setupTests.js && echo "Cambiando variables de entorno a $ENTORNO";;
    desarrollo) cat env.desarrollo.config.js ;;
    qa) cat env.qa.config.js ;;
    staging) cat env.stg.config.js ;;
    produccion) cat env.prod.config.js ;;
    *) echo "Entorno '$ENTORNO' no valido" ;;
esac