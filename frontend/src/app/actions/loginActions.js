import {LOGIN_SHOW, LOGIN_HIDE, LOGIN_SUCCESS, LOGOUT} from "../constants/loginConstants";
/**
 * @author rlapin
 */



export function successLogin() {
     return {
         type: LOGIN_SUCCESS
     }
}
export function logout() {
    return {
        type: LOGOUT
    }
}
