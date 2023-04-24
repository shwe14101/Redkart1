import { combineReducers } from "redux";

import shoppingReducer from '../reducers/cart_reducer';
//import * from '../reducers/product_reducer';


const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;