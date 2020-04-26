import { combineReducers, applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import * as authReducer from "./reducers/auth";

const reducers = combineReducers(authReducer);

export default store = createStore(reducers, applyMiddleware(ReduxThunk));
