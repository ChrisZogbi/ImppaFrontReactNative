import { combineReducers, applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import courseReducer from "./reducers/course";

const reducers = combineReducers({ course: courseReducer });

export const store = createStore(reducers, applyMiddleware(ReduxThunk));
