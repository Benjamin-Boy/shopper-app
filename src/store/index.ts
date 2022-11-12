import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./features/globalSlice";
import productsReducer from "./features/productsSlice";
import filterReducer from "./features/filterSlice";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    products: productsReducer,
    filters: filterReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
