import {LOGIN_SHOW, LOGIN_HIDE, LOGIN_SUCCESS, LOGOUT} from "../constants/loginConstants";
/**
 * @author rlapin
 */



const DEFAULT_STATE = {
    auth: false
};


export function loginState(state = DEFAULT_STATE, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return Object.assign({},state,{auth:true});
        case LOGOUT:
            return Object.assign({},state,{auth:false});
        default:
            return state;

    }
}

