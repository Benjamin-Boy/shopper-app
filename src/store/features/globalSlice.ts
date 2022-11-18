import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cartOpen: boolean;
  cartEffect: string;
  sidebarOpen: boolean;
  categoriesOpen: boolean;
  categoriesEffect: string;
  filtersOpen: boolean;
  filtersEffect: string;
  currentProductPage: number;
  currentRatingPage: number;
  recordsPerPage: number;
};

const initialState: InitialState = {
  cartOpen: false,
  cartEffect: "idle",
  sidebarOpen: false,
  categoriesOpen: false,
  categoriesEffect: "idle",
  filtersOpen: false,
  filtersEffect: "idle",
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
    toggleCartEffect(state) {
      if (
        (state.cartOpen && state.cartEffect === "idle") ||
        (state.cartOpen && state.cartEffect === "closed")
      ) {
        state.cartEffect = "open";
      } else if (!state.cartOpen && state.cartEffect === "open") {
        state.cartEffect = "closed";
      }
    },
    togglesidebarOpen(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleCategoriesOpen(state) {
      state.categoriesOpen = !state.categoriesOpen;
    },
    toggleCategoriesEffect(state) {
      if (
        (state.categoriesOpen && state.categoriesEffect === "idle") ||
        (state.categoriesOpen && state.categoriesEffect === "closed")
      ) {
        state.categoriesEffect = "open";
      } else if (!state.categoriesOpen && state.categoriesEffect === "open") {
        state.categoriesEffect = "closed";
      }
    },
    toggleFilterOpen(state) {
      state.filtersOpen = !state.filtersOpen;
    },
    toggleFiltersEffect(state) {
      if (
        (state.filtersOpen && state.filtersEffect === "idle") ||
        (state.filtersOpen && state.filtersEffect === "closed")
      ) {
        state.filtersEffect = "open";
      } else if (!state.filtersOpen && state.filtersEffect === "open") {
        state.filtersEffect = "closed";
      }
    },
    setCurrentProductPage(state, { payload }) {
      state.currentProductPage = payload;
    },
  },
});

export default globalSlice.reducer;
export const {
  toggleCartOpen,
  toggleCartEffect,
  togglesidebarOpen,
  toggleCategoriesOpen,
  toggleCategoriesEffect,
  toggleFilterOpen,
  toggleFiltersEffect,
  setCurrentProductPage,
} = globalSlice.actions;
