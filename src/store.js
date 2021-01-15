import middleware from "./redux/middleware";
import reducer from "./redux/reducers";
import { createStore, compose } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "addmissionForm",
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  persistedReducer,
  compose(
    middleware,
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export default store
