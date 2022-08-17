import { combineReducers } from "redux";
import formReducer from "./formReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    userReducer,
    formReducer
});

export default rootReducer;