import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import { rootreducer } from './reducers';

const initialState={};

const composeEnhencer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootreducer,initialState,composeEnhencer(applyMiddleware(thunk)))