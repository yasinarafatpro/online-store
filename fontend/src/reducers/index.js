import { combineReducers } from "redux";
import {productListReducer,productDetailsReducer} from './reqSuccessFailReducer'


export const rootreducer=combineReducers({
    productListReducer,
    productDetailsReducer
})