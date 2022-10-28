import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./currentUser";
import allProductsReducer from "./allProducts";
import ovarlayReducer from "./ovarlay";
import cartReducer from "./cartItem";

const store = configureStore({
  reducer: {
    user: userReducer,
    allProducts: allProductsReducer,
    overlay: ovarlayReducer,
    cart: cartReducer,
  },
});

export default store;
