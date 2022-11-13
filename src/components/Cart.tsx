// Import React properties

// Imports custom hooks
import { useAppSelector, useAppDispatch } from "../hooks";

// Imports Redux slices
import {
  removeFromCart,
  increaseItemNumber,
  decreaseItemNumber,
  getTotals,
} from "../store/features/cartSlice";
import { toggleCartOpen } from "src/store/features/globalSlice";

// Imports React components
import Button from "./Button";

// Imports React icons
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";

const Cart = () => {
  const { cartOpen } = useAppSelector((state) => state.global);
  const { cartItems, totalItems, shipping, total } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotals());
  });

  return (
    <div
      className={`z-10 absolute top-[60px] right-0 bg-primaryBg w-[25rem] md:h-[calc(100vh-60px)] p-8 ${
        cartOpen ? "animate-cartToggle" : "animate-cartToggleReverse"
      }`}
    >
      <div className="flex justify-between items-baseline">
        <h1 className="text-3xl">Your cart</h1>
        <h3
          className="cursor-pointer"
          onClick={() => dispatch(toggleCartOpen())}
        >
          close
        </h3>
      </div>
      <div className="flex flex-col border-y border-primaryText my-4">
        {cartItems.length > 0
          ? cartItems.map(
              ({ id, productName, color, size, quantity, price, image }) => {
                return (
                  <div key={id} className="flex justify-between py-4 px-2">
                    <img
                      src={image}
                      alt={productName}
                      className="h-[100px] rounded-lg"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl">{productName}</h2>
                        <h3 className="text-sm">
                          {color.name} / {size}
                        </h3>
                      </div>
                      <div className="flex justify-start gap-2">
                        <div
                          className="text-md cursor-pointer"
                          onClick={() => dispatch(decreaseItemNumber(id))}
                        >
                          -
                        </div>
                        <div className="text-md">{quantity}</div>
                        <div
                          className="text-md cursor-pointer"
                          onClick={() => dispatch(increaseItemNumber(id))}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <div
                        onClick={() => dispatch(removeFromCart(id))}
                        className="cursor-pointer"
                      >
                        <AiOutlineClose />
                      </div>
                      <h2 className="text-lg">£{price}</h2>
                    </div>
                  </div>
                );
              }
            )
          : "Your cart is empty"}
      </div>
      <div className="">
        <div className="flex justify-between px-2">
          <h1 className="text-2xl">Total items</h1>
          <h1 className="text-2xl">{totalItems}</h1>
        </div>
        <div className="flex justify-between px-2">
          <h1 className="text-2xl">Shipping</h1>
          <h1 className="text-2xl">£{shipping}</h1>
        </div>
        <div className="flex justify-between px-2">
          <h1 className="text-2xl">Total</h1>
          <h1 className="text-2xl">£{total}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Button text="Checkout" use="cart" path={"/checkout"} />
        <Button
          text="Continue browsing"
          use="cart-trans"
          toggleCartOpen={() => dispatch(toggleCartOpen())}
        />
      </div>
    </div>
  );
};

export default Cart;
