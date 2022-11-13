import { createSlice } from "@reduxjs/toolkit";

// Imports data files
import products from "../../data/data.json";

const productsString = JSON.stringify(products);

type BaseProduct = {
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

type Product = {
  id: number;
  productId: number;
  productName: string;
  color: {
    id: number;
    name: string;
    hexCode: string;
    available: boolean;
  };
  size: string;
  quantity: number;
  price: string;
  image: string;
};

interface InitialState {
  products: BaseProduct[];
  cartItems: Product[];
  product: Product;
  totalItems: string;
  shipping: number;
  total: number;
}

const initialState: InitialState = {
  products: JSON.parse(productsString),
  cartItems: [],
  product: {
    id: 0,
    productId: 0,
    productName: "",
    color: {
      id: 0,
      name: "",
      hexCode: "",
      available: true,
    },
    size: "",
    quantity: 0,
    price: "",
    image: "",
  },
  totalItems: "",
  shipping: 10,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleColorChange(state, { payload }) {
      const { productId, colorId, value } = payload;

      const product = state.products.find(
        (product) => product.id === Number(productId)
      )!;

      const color = product.colors.find(
        (color) => color.id === Number(colorId)
      )!;

      if (value) {
        state.product.color = color;
      }
    },
    handleSizeChange(state, { payload }) {
      const { value } = payload;

      const size = value;
      state.product.size = size;
    },
    addToCart(state, { payload }) {
      const baseProduct = state.products.find(
        (product) => product.id === Number(payload)
      )!;

      const randId = Math.random();

      const product: Product = {
        id: randId,
        productId: baseProduct.id,
        productName: baseProduct.productName,
        color: state.product.color,
        size: state.product.size,
        quantity: 1,
        price: baseProduct.price,
        image: baseProduct.image,
      };

      state.cartItems.push(product);
    },
    removeFromCart(state, { payload }) {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    increaseItemNumber(state, { payload }) {
      const product: Product = state.cartItems.find(
        (product) => product.id === payload
      )!;

      product.quantity += 1;
    },
    decreaseItemNumber(state, { payload }) {
      const product: Product = state.cartItems.find(
        (product) => product.id === payload
      )!;

      if (product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    getTotals(state) {
      state.totalItems = state.cartItems.length.toString();

      let totalPerItem = state.cartItems.map(
        (product) => product.quantity * Number(product.price)
      );

      const total = totalPerItem.reduce((prev, curr) => {
        return prev + curr;
      }, 0);

      if (state.cartItems.length > 0) {
        state.total = total + state.shipping;
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  handleColorChange,
  handleSizeChange,
  removeFromCart,
  increaseItemNumber,
  decreaseItemNumber,
  getTotals,
} = cartSlice.actions;
