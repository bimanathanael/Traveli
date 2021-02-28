import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import englishReducer from "./reducer/englishReducer";
import userReducer from "./reducer/userReducer";
import historyReducer from "./reducer/historyReducer";
import sidebarReducer from "./reducer/sidebarReducer";
import indonesiaReducer from "./reducer/indonesiaReducer";
import promoReducer from "./reducer/promoReducer";
import newsletterReducer from "./reducer/newsletterReducer";
const reducers = combineReducers({
  englishReducer,
  userReducer,
  historyReducer,
  sidebarReducer,
  indonesiaReducer,
  promoReducer,
  newsletterReducer,
});
const middlewares = applyMiddleware(thunk);

const store = createStore(reducers, middlewares);

export default store;
