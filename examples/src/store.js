import { createStore, combineReducers } from "redux";
import { connectedReducer } from "redux-connected-ui";

const production = process.env.NODE_ENV === "production";

const enableDevTools = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const finalCreateStore = production ? createStore : enableDevTools(createStore);

const rootReducer = combineReducers({
  ui: connectedReducer,
});

export default () => finalCreateStore(rootReducer);
