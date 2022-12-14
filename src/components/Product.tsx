// Imports React properties
import { useEffect } from "react";

// Imports React components

// Imports React router properties
import { useParams, Link } from "react-router-dom";

// Imports custom hooks
import { useAppSelector, useAppDispatch } from "../hooks";

// Imports Redux slices
import { calculateAvgRating } from "../store/features/productsSlice";
import {
  addToCart,
  handleColorChange,
  handleSizeChange,
} from "../store/features/cartSlice";

// Imports React icons
import { AiTwotoneStar } from "react-icons/ai";

type ProductParams = {
  id: string;
};

const Product = () => {
  const { products, avgRating } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { id } = useParams<ProductParams>();

  const product = products.filter((product) => product.id === Number(id));

  const {
    brand,
    productName,
    categories,
    masterCategory,
    colors,
    image,
    sizes,
    price,
  } = product[0];

  const currency = "£";

  useEffect(() => {
    dispatch(calculateAvgRating(id));
  });

  return (
    <div className="md:flex md:h-screen">
      <div className="w-full h-screen max-w-[600px] md:min-w-[600px]">
        <img
          src={image}
          alt={productName}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="bg-secondaryBg flex flex-col gap-8 p-8 md:py-32 h-screen md:w-full">
        <div>
          <h4 className="text-sm text-primaryText">
            <Link to="/">Home</Link> / <Link to="/products">Shop</Link> /{" "}
            {masterCategory}
          </h4>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">{brand}</h2>
          <h1 className="text-4xl">{productName}</h1>
        </div>
        <div className="flex justify-start gap-2">
          {categories.map((category, index) => {
            return (
              <span
                key={index}
                className="text-lg bg-tertiaryBg text-tertiaryText px-4 rounded-md"
              >
                {category}
              </span>
            );
          })}
        </div>
        <div className="flex justify-start gap-20">
          <div className="flex justify-start items-center gap-2">
            <span className="text-2xl">
              <AiTwotoneStar />
            </span>
            <span className="text-2xl">{avgRating}</span>
          </div>
          <div className="text-4xl">
            {currency}
            {price}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg">Color name</h4>
          <div className="flex justify-start gap-2 pl-4">
            {colors.map(({ id: colorId, hexCode }) => {
              return (
                <input
                  type="checkbox"
                  key={colorId}
                  className={`w-[2rem] h-[2rem] ${hexCode} rounded-full group appearance-none checked:border-2 checked:border-tertiaryText`}
                  onChange={(e) =>
                    dispatch(
                      handleColorChange({
                        productId: id,
                        colorId,
                        value: (e.currentTarget as HTMLInputElement).checked,
                      })
                    )
                  }
                ></input>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-16">
          <h4 className="text-lg">Size</h4>
          <div className="w-[10rem] h-[3rem] pl-4">
            <select
              name="size"
              className="w-full h-full pl-4 bg-secondaryBg border border-gray"
              onChange={(e) =>
                dispatch(
                  handleSizeChange({
                    productId: id,
                    value: (e.currentTarget as HTMLSelectElement).value,
                  })
                )
              }
            >
              {sizes.map(({ size }, index) => {
                return (
                  <option key={index} value={size}>
                    {size}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button
          className="text-3xl text-center rounded-md px-8 py-2 border-2 text-secondaryText bg-quaternaryBg border-transparent hover:text-primaryText hover:bg-transparent hover:border-gray"
          onClick={() => dispatch(addToCart(id))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
