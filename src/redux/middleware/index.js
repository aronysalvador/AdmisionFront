import { applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Logger from "./logger";

const packageMiddlewares = () => {
    if (process.env.NODE_ENV === 'development' || process.env.ENTORNO === 'desarrollo')
    {
        const { createLogger } = require('redux-logger');

        const localLogger = createLogger({
            duration: true,
            timestamp: true,
            // diff: true,
            collapsed: (getState, action, logEntry) => true//!logEntry.error
        });

        return applyMiddleware(Thunk, Logger, localLogger);
    }
    else
    {
        return applyMiddleware(Thunk, Logger);
    }
}


export default packageMiddlewares();
