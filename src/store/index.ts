import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./features/globalSlice";
import productsReducer from "./features/productsSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
