import { createStore } from "redux";
import {composeWithDevTools } from '@redux-devtools/extension'
import {productReducer} from './Product/product.reducer'
let store=createStore(productReducer,composeWithDevTools())


export {store}