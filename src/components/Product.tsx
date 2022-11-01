// Imports React components
import Button from "../components/Button";

// Imports React router properties
import { useParams } from "react-router-dom";

// Imports custom hooks
import { useAppSelector } from "../hooks";

// Imports Redux slices
// import { calculateAvgRating } from "../store/features/productsSlice";

// Imports React icons
import { AiTwotoneStar } from "react-icons/ai";

const Product = () => {
  const { products } = useAppSelector((state) => state.products);
  const { id } = useParams();

  const product = products.filter((product) => product.id === Number(id));

  const {
    brand,
    productName,
    categories,
    masterCategory,
    ratings,
    colors,
    image,
    sizes,
    price,
  } = product[0];

  const ratingsArr = Array.from(
    new Set(ratings.map((rating) => rating.rating))
  );
  const ratingsArrReduce = ratingsArr.reduce((prev, curr) => prev + curr, 0);
  const avgRating = (ratingsArrReduce / ratings.length).toFixed(1);

  const currency = "£";

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
            Home / Shop / {masterCategory}
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
            {colors.map(({ id, hexCode }) => {
              return (
                <div
                  key={id}
                  className={`w-[2rem] h-[2rem] ${hexCode} rounded-full hover:brightness-105`}
                ></div>
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
        <Button text="Add to cart" use="product" />
      </div>
    </div>
  );
};

export default Product;
