import { createStore, applyMiddleware } from 'redux';
import {appReducer} from '../reducers';



export default function configureStore(initialState) {
    debugger;
    return createStore(appReducer, initialState);
}