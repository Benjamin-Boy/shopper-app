import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  product: {
    id: number;
    productName: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
  };
}

const initialState: InitialState = {
  product: {
    id: 0,
    productName: "",
    color: "",
    size: "",
    quantity: 0,
    price: 0,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleColorChange(state, { payload }) {
      state.product.color = payload;
    },
    handleSizeChange() {},
  },
});

export default productSlice.reducer;
