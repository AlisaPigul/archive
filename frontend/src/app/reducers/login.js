/**
 * @author rlapin
 */



const DEFAULT_STATE = {
    show: false,
    auth: false
};


export function loginForm(state = DEFAULT_STATE, action){
    switch(action.type){
        case 'LOGIN_SHOW':
            return {
                show: true
            };
        case 'LOGIN_HIDE':
            return {
                show: false
            };
        case 'SUCCESS_LOGIN':
            return {
                auth: true
            };
        default:
            return state;

    }
}

