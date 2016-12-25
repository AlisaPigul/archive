import {combineReducers} from "redux";
import {loginReducer} from "./login"
/**
 * @author rlapin
 */






export const appReducer = combineReducers({
   loginReducer,
});