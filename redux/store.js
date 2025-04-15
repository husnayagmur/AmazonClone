// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import productReducer from '../redux/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
