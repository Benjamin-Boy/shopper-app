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
  filteredProducts: Product[];
  filters: {
    categories: string[];
    clothTypes: string[];
    genders: string[];
    brands: string[];
    colors: string[];
    price: number;
    minPrice: number;
    maxPrice: number;
  };
}

const initialState: InitialState = {
  products: JSON.parse(productsString),
  filteredProducts: JSON.parse(productsString),
  filters: {
    categories: [],
    clothTypes: [],
    genders: [],
    brands: [],
    colors: [],
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    clearFilters(state) {
      state.filters = {
        categories: [],
        clothTypes: [],
        genders: [],
        brands: [],
        colors: [],
        price: state.filters.maxPrice,
        minPrice: 0,
        maxPrice: state.filters.maxPrice,
      };

      state.filteredProducts = state.products;
    },
    filterProducts(state, { payload }) {
      const { name, value, filterType } = payload;
      let { categories, clothTypes, genders, brands, colors, price, maxPrice } =
        state.filters;
      let productsTemp = state.products;

      const pricesArr = productsTemp.map((p) => Number(p.price));

      maxPrice = Math.max(...pricesArr);
      price = maxPrice;

      if (filterType === "category") {
        if (value) {
          categories.push(name);
        } else {
          categories = categories.filter((category) => category !== name);
        }
      }

      if (filterType === "clothType") {
        if (value) {
          clothTypes.push(name);
        } else {
          clothTypes = clothTypes.filter((type) => type !== name);
        }
      }

      if (filterType === "gender") {
        if (value) {
          genders.push(name);
        } else {
          genders = genders.filter((gender) => gender !== name);
        }
      }

      if (filterType === "brand") {
        if (value) {
          brands.push(name);
        } else {
          brands = brands.filter((brand) => brand !== name);
        }
      }

      if (filterType === "color") {
        if (value) {
          colors.push(name);
        } else {
          colors = colors.filter((color) => color !== name);
        }
      }

      if (filterType === "price") {
        price = value;
      }

      if (categories.length > 0) {
        productsTemp = productsTemp.filter((product) =>
          categories.includes(product.masterCategory)
        );
      }

      if (clothTypes.length > 0) {
        productsTemp = productsTemp.filter((product) =>
          clothTypes.includes(product.articleType)
        );
      }

      if (genders.length > 0) {
        productsTemp = productsTemp.filter((product) =>
          genders.includes(product.gender)
        );
      }

      if (brands.length > 0) {
        productsTemp = productsTemp.filter((product) =>
          brands.includes(product.brand)
        );
      }

      if (colors.length > 0) {
        productsTemp = productsTemp.filter((product) =>
          colors.every((v) =>
            Array.from(
              new Set(product.colors.map((color) => color.name))
            ).includes(v)
          )
        );
      }

      if (price >= 0) {
        productsTemp = productsTemp.filter(
          (product) => Number(product.price) <= Number(price)
        );
      }

      state.filters = {
        ...state.filters,
        categories,
        clothTypes,
        genders,
        brands,
        colors,
        price,
        maxPrice,
      };
      state.filteredProducts = productsTemp;
    },
  },
});

export default filterSlice.reducer;
export const { filterProducts, clearFilters } = filterSlice.actions;
