import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import {appReducer} from '../reducers';
import DevTools from '../components/devTools';

const enhancer = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    return createStore(appReducer, initialState, enhancer);
}