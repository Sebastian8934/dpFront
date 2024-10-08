import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import userReducers from './reducers/userReducers';

const rootReducer = combineReducers({
    userReducers: userReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}