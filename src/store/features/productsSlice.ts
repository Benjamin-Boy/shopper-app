import { createSlice } from "@reduxjs/toolkit";

// Imports data files
import products from "../../data/data.json";

const productsString = JSON.stringify(products);

type Product = {
  id: number;
  brand: string;
  productName: string;
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
  currency: string[];
  avgRating: number;
  isLoading: boolean;
}

const initialState: InitialState = {
  products: JSON.parse(productsString),
  currency: ["£", "$", "€"],
  avgRating: 0,
  isLoading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
