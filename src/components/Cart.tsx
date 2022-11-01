// Import React properties

// Imports custom hooks
import { useAppSelector } from "../hooks";

// Imports React components
import Button from "./Button";

// Imports React icons
import { AiOutlineClose } from "react-icons/ai";

import defaultImg from "../assets/temp/2601.jpg";

const Cart = () => {
  const { cartOpen } = useAppSelector((state) => state.global);
  const products = [1, 2];

  return (
    <div
      className={`z-10 absolute top-[60px] right-0 bg-primaryBg w-[25rem] md:h-[calc(100vh-60px)] p-8 ${
        cartOpen ? "animate-cartToggle" : "animate-cartToggleReverse"
      }`}
    >
      <div className="flex justify-between items-baseline">
        <h1 className="text-3xl">Your cart</h1>
        <h3>close</h3>
      </div>
      <div className="flex flex-col border-y border-primaryText my-4">
        {products.map(() => {
          return (
            <div className="flex justify-between py-4 px-2">
              <img
                src={defaultImg}
                alt="default"
                className="h-[100px] rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-xl">Product name</h2>
                  <h3 className="text-sm">Color name / size</h3>
                </div>
                <div className="flex justify-start gap-2">
                  <div className="text-md">-</div>
                  <div className="text-md">1</div>
                  <div className="text-md">+</div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <AiOutlineClose />
                <h2 className="text-lg">$35</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <div className="flex justify-between px-2">
          <h1 className="text-2xl">Total items</h1>
          <h1 className="text-2xl">2</h1>
        </div>
        <div className="flex justify-between px-2">
          <h1 className="text-2xl">Shipping</h1>
          <h1 className="text-2xl">$10</h1>
        </div>
        <div className="flex justify-between px-2">
          <h1 className="text-2xl">Total</h1>
          <h1 className="text-2xl">$80</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Button text="Checkout" use="cart" path={"/checkout"} />
        <Button text="Continue browsing" use="cart-trans" />
      </div>
    </div>
  );
};

export default Cart;
