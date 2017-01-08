/**
 * @author rlapin
 */


export function showLogin() {
    return {
        type: 'LOGIN_SHOW'
    }
}
export function hideLogin() {
    return {
        type: 'LOGIN_HIDE'
    }
}
export function successLogin() {
     return {
         type: 'SUCCESS_LOGIN'
     }
}
