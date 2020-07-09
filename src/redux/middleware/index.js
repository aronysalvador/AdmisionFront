import { applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Logger from "./logger";

export default applyMiddleware(Thunk, Logger);
