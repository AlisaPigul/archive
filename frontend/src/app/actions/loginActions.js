import {LOGIN_SHOW, LOGIN_HIDE, LOGIN_SUCCESS} from "../constants/loginConstants";
/**
 * @author rlapin
 */



export function successLogin() {
     return {
         type: LOGIN_SUCCESS
     }
}
