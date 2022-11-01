// Import React properties

// Imports custom hooks
import { useAppSelector, useAppDispatch } from "../hooks";

// Imports redux slices
import {
  toggleCartOpen,
  togglesidebarOpen,
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

// Imports data files
import products from "../data/data.json";

// Imports assets files
import logo from "../assets/images/logo.png";
// import defaultImg from "../assets/temp/2601.jpg";

const Navbar = () => {
  const { categoriesOpen, sidebarOpen } = useAppSelector(
    (state) => state.global
  );
  const dispatch = useAppDispatch();

  if (sidebarOpen) {
    document.body.style.overflow = "hidden";
  }

  const featuredProducts = [];

  for (let i = 0; i < 2; i++) {
    const randProduct = Math.floor(Math.random() * products.length);
    const product = products[randProduct];

    featuredProducts.push(product);
  }

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
          <div onClick={() => dispatch(toggleCartOpen())}>
            <HiOutlineShoppingCart />
          </div>
          <div
            className="block md:hidden"
            onClick={() => dispatch(togglesidebarOpen())}
          >
            <FaBars />
          </div>
        </div>
      </div>

      <div className={`block md:hidden`}>{sidebarOpen && <Sidebar />}</div>

      <Cart />

      <div
        className={`hidden md:flex justify-between z-0 absolute top-14 w-full bg-quinternaryBg p-8 ${
          categoriesOpen
            ? "animate-categoriesToggle"
            : "animate-categoriesToggleReverse"
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
