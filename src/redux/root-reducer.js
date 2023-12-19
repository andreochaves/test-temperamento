import { combineReducers } from "redux";
import resulReducer from "./result/reducers";

const rootReducer = combineReducers({resulReducer});

export default rootReducer