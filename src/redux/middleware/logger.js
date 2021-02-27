import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

if (window.APPLICATION_INSIGHTS){
  let reactPlugin = new ReactPlugin();
  var ai = new ApplicationInsights({
      config: {
          instrumentationKey: window.APPLICATION_INSIGHTS,
          extensions: [ reactPlugin ]
      }
  });
  ai.loadAppInsights();
}

const logger = store => next => action => {
  if(action.type){
    if (window.APPLICATION_INSIGHTS){
      let fechaLog = store.getState().LogForm.fecha
      if (
        (action.type.toUpperCase().includes("SUCCESS") ||
        action.type.toUpperCase().includes("FAILURE") ||
        action.type.toUpperCase().includes("SAVE") ||
        action.type.toUpperCase().includes("UPDATE"))
        && !action.type.toUpperCase().includes("LOG")
        && fechaLog
      ){
        console.log("sending log ", fechaLog);
        ai.appInsights.trackEvent({ name: 'Redux Action '+fechaLog, properties: action })
      }
    }
  }
  const result = next(action);
  return result;
};

export default logger
