// Import React properties
import { useEffect } from "react";

// Imports custom hooks
import { useAppSelector, useAppDispatch } from "../hooks";

// Imports redux slices
import {
  toggleCartOpen,
  toggleCategoriesOpen,
  toggleCategoriesEffect,
  toggleCartEffect,
} from "../store/features/globalSlice";

// Import React router properties
import { Link } from "react-router-dom";

// Imports React components
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import Navlinks from "./Navlinks";
import Categories from "./Categories";

// Imports React icons
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

// Imports assets files
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { products } = useAppSelector((state) => state.products);
  const {
    categoriesOpen,
    sidebarOpen,
    categoriesEffect,
    cartOpen,
    cartEffect,
  } = useAppSelector((state) => state.global);
  const { totalItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (sidebarOpen) {
    document.body.style.overflow = "hidden";
  }

  const featuredProducts = [];

  for (let i = 0; i < 1; i++) {
    const randProduct = Math.floor(Math.random() * products.length);
    const product = products[randProduct];

    featuredProducts.push(product);
  }

  useEffect(() => {
    dispatch(toggleCategoriesEffect());
  }, [categoriesOpen]);

  useEffect(() => {
    dispatch(toggleCartEffect());
  }, [cartOpen]);

  return (
    <div className="z-50 sticky top-0 w-full">
      <div className="z-20 absolute w-full bg-primaryBg flex justify-between items-center h-[60px] border-b border-b-gray">
        <Link to="/" className="h-full">
          <img src={logo} alt="logo" className="h-full" />
        </Link>
        <div className="flex justify-center items-center gap-8 text-3xl text-primaryText px-8">
          <div className="hidden md:block">
            <Navlinks />
          </div>
          <div className="relative" onClick={() => dispatch(toggleCartOpen())}>
            <HiOutlineShoppingCart />
            <div className="absolute right-[-0.7rem] top-[-0.7rem] flex justify-center items-center w-[1.5rem] h-[1.5rem] bg-[#fff0c7] rounded-full text-lg">
              {totalItems}
            </div>
          </div>
          <div
            className="block md:hidden"
            onClick={() => dispatch(toggleCategoriesOpen())}
          >
            <FaBars />
          </div>
        </div>
      </div>

      <div className={`block md:hidden`}>{sidebarOpen && <Sidebar />}</div>

      <div
        className={`${
          cartEffect === "open"
            ? "animate-cartToggle"
            : cartEffect === "closed"
            ? "animate-cartToggleReverse"
            : "translate-x-[-100%]"
        }`}
      >
        <Cart />
      </div>

      <div
        className={`hidden md:flex justify-between z-0 absolute top-14 w-full bg-quinternaryBg p-8 ${
          categoriesEffect === "open"
            ? "animate-categoriesToggle"
            : categoriesEffect === "closed"
            ? "animate-categoriesToggleReverse"
            : "translate-y-[100%]"
        }`}
      >
        <Categories />
        <div className="md:hidden xl:flex flex-col items-center w-[20%] gap-4">
          {featuredProducts.map(({ id, productName, image }) => {
            return (
              <Link key={id} to={`/products/${id}`}>
                <img
                  src={image}
                  alt={productName}
                  className="h-full min-h-[220px] max-h-[300px] rounded-lg hover:scale-105 transition 500ms"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
