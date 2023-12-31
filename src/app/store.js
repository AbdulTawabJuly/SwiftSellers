import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  // ye reducers yaha is liye add kiye hai kyu ke ye sab extra reduces hai resetOrder ke reducer ko add ni kiya kyu ke wo extra Reducer ni tha
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
    // user naam ke aik object mai userReducer add kar diya hai 
  },
});
