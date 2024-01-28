
// store.jsx
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
// const thunk = require('redux-thunk').default; 
// Use require syntax
import { thunk } from 'redux-thunk';

import { authReducer } from './Auth/Reducer';
import { customerProductReducer } from './Product/Reducer';
import { cartReducer } from './Cart/Reducer';
import { orderReducer } from './Order/Reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducer,
  order: orderReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));



// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './slice/CartSlice';


// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;
