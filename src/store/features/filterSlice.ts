import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  subcategories: [],
  clothTypes: [],
  genders: [],
  brands: [],
  colors: [],
  price: 0,
  maxPrice: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});

export default filterSlice.reducer;
