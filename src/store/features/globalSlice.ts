import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cartOpen: boolean;
  sidebarOpen: boolean;
  categoriesOpen: boolean;
  filterOpen: boolean;
  currentProductPage: number;
  currentRatingPage: number;
  recordsPerPage: number;
};

const initialState: InitialState = {
  cartOpen: false,
  sidebarOpen: false,
  categoriesOpen: false,
  filterOpen: false,
  currentProductPage: 1,
  currentRatingPage: 1,
  recordsPerPage: 15,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleCartOpen(state) {
      state.cartOpen = !state.cartOpen;
    },
    togglesidebarOpen(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleCategoriesOpen(state) {
      state.categoriesOpen = !state.categoriesOpen;
    },
    toggleFilterOpen(state) {
      state.filterOpen = !state.filterOpen;
    },
    setCurrentProductPage(state, { payload }) {
      state.currentProductPage = payload;
    },
  },
});

export default globalSlice.reducer;
export const {
  toggleCartOpen,
  togglesidebarOpen,
  toggleCategoriesOpen,
  toggleFilterOpen,
  setCurrentProductPage,
} = globalSlice.actions;
