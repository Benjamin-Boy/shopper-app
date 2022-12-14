import { createSlice } from "@reduxjs/toolkit";

// Imports data files
import products from "../../data/data.json";

const productsString = JSON.stringify(products);

type Product = {
  id: number;
  brand: string;
  productName: string;
  gender: string;
  categories: string[];
  masterCategory: string;
  subCategory: string;
  articleType: string;
  avgRating: number;
  ratings: {
    id: number;
    customerName: string;
    rating: number;
    date: string;
    content: string;
  }[];
  price: string;
  colors: {
    id: number;
    name: string;
    hexCode: string;
    available: boolean;
  }[];
  sizes: {
    size: string;
    available: boolean;
  }[];
  image: string;
};

interface InitialState {
  products: Product[];
  featuredProducts: Product[];
  relatedProducts: Product[];
  categoriesProducts: Product[];
  currency: string[];
  avgRating: number;
  isLoading: boolean;
}

const initialState: InitialState = {
  products: JSON.parse(productsString),
  featuredProducts: [],
  relatedProducts: [],
  categoriesProducts: [],
  currency: ["£", "$", "€"],
  avgRating: 0,
  isLoading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    calculateAvgRating(state, { payload }) {
      const product = state.products.filter(
        (product) => product.id === Number(payload)
      );
      const { ratings } = product[0];
      const ratingsArr = Array.from(
        new Set(ratings.map((rating) => rating.rating))
      );
      const ratingsArrReduce = ratingsArr.reduce(
        (prev, curr) => prev + curr,
        0
      );
      const avgRating = Number((ratingsArrReduce / ratings.length).toFixed(1));

      state.avgRating = avgRating;
    },
  },
});

export default productsSlice.reducer;
export const { calculateAvgRating } = productsSlice.actions;
