import { combineReducers } from "redux";
import {productListReducer,productDetailsReducer} from './reqSuccessFailReducer';
import { cartReducer } from "./CartReducers";


export const rootreducer=combineReducers({
    productListReducer,
    productDetailsReducer,
    cartReducer,
})