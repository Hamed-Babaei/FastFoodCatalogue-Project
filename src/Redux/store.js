import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Store/CartReducer";

export default configureStore({
  reducer: {
    cart: userReducer,
  },
});
