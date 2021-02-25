import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from './store'

let persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store} pers>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
