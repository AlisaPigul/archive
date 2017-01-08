import {LOGIN_SHOW, LOGIN_HIDE, LOGIN_SUCCESS} from "../constants/loginConstants";
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
        default:
            return state;

    }
}

