import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cartItems: {
    brandName: string;
    productName: string;
    categories: string[];
    avgRating: Number;
    ratings: {
      customerName: string;
      rating: Number;
      date: string;
      content: string;
    }[];
    price: Number;
    colors: {
      name: string;
      code: string;
    }[];
    sizes: string[];
    images: string[];
  }[];
  totalItems: Number;
  shipping: Number;
  total: Number;
};

const initialState: InitialState = {
  cartItems: [],
  totalItems: 0,
  shipping: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems = [action.payload];
    },
    removeFromCart() {},
    increaseItemNumber() {},
    decreaseItemNumber() {},
    getTotals() {},
  },
});

export default cartSlice.reducer;
