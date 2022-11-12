import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cartOpen: boolean;
  sidebarOpen: boolean;
  categoriesOpen: boolean;
  filterOpen: boolean;
};

const initialState: InitialState = {
  cartOpen: false,
  sidebarOpen: false,
  categoriesOpen: false,
  filterOpen: false,
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
  },
});

export default globalSlice.reducer;
export const {
  toggleCartOpen,
  togglesidebarOpen,
  toggleCategoriesOpen,
  toggleFilterOpen,
} = globalSlice.actions;