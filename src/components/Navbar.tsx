// Imports React components
import Sidebar from "./Sidebar";
import Cart from "./Cart";

// Imports React icons
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

// Imports assets files
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const sidebarOpen = false;
  const cartOpen = true;

  return (
    <div className="fixed bg-primaryBg w-full">
      <div className="flex justify-between items-center h-[60px] border-b border-b-gray">
        <img src={logo} alt="logo" className="h-full" />
        <div className="flex justify-center items-center gap-8 h-[50%] text-3xl text-primaryText px-4">
          <HiOutlineShoppingCart />
          <FaBars />
        </div>
      </div>
      {sidebarOpen && (
        <div className="absolute z-20 w-full">
          <Sidebar />
        </div>
      )}
      {cartOpen && (
        <div className="absolute z-20 w-full">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Navbar;
