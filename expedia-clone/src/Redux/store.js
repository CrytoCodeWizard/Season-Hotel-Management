import {
  applyMiddleware,
  legacy_createStore,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppContext/reducer";
import { reducer as AuthReducer } from "./AuthContext/reducer";

const rootRuducer = combineReducers({ AppReducer, AuthReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootRuducer,
  composeEnhancers(applyMiddleware(thunk))
);
