// Imports React components
import Button from "../components/Button";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

// Imports React icons
import { AiTwotoneStar } from "react-icons/ai";

import defaultImg from "../assets/temp/2601.jpg";

const SingleProduct = () => {
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8];
  const colors = [1, 2, 3, 4, 5];
  const sizes = ["Xs", "S", "M", "L", "Xl", "Xxl"];

  return (
    <div className="h-screen">
      <div className="w-full h-full">
        <img
          src={defaultImg}
          alt="default"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="bg-secondaryBg h-[calc(100vh-60px)] flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Product Brand</h2>
          <h1 className="text-4xl">Product Name</h1>
        </div>
        <div className="flex justify-start gap-2">
          <span className="text-lg bg-tertiaryBg text-tertiaryText px-4 rounded-md">
            Category
          </span>
          <span className="text-lg bg-tertiaryBg text-tertiaryText px-4 rounded-md">
            Category
          </span>
        </div>
        <div className="flex justify-start gap-20">
          <div className="flex justify-start items-center gap-2">
            <span className="text-2xl">
              <AiTwotoneStar />
            </span>
            <span className="text-2xl">4.6</span>
          </div>
          <div className="text-4xl">$35</div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg">Color name</h4>
          <div className="flex justify-start gap-2 pl-4">
            {colors.map(() => {
              return (
                <div className="w-[2rem] h-[2rem] bg-tertiaryBg rounded-full"></div>
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
              {sizes.map((size) => {
                return <option value={size}>{size}</option>;
              })}
            </select>
          </div>
        </div>
        <Button text="Add to cart" />
      </div>
      <Featured title="Related products" />
      <div className="px-8 bg-secondaryBg">
        {ratings.map(() => {
          return (
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center gap-2">
                <h2 className="text-2xl">Customer name</h2>
                <div className="flex justify-start items-center gap-2">
                  <span className="text-xl">.</span>
                  <span className="text-xl">
                    <AiTwotoneStar />
                  </span>
                  <span className="text-xl">4.6</span>
                  <span className="text-xl">.</span>
                </div>
                <div>
                  <h3 className="text-lg">15/10/2022</h3>
                </div>
              </div>
              <div>
                <p>
                  Nulla justo ante, molestie quis tincidunt quis, convallis
                  feugiat purus. Nulla sed varius sem, vel feugiat nibh. Nulla
                  sed mauris eu sapien convallis elementum at ut neque. Sed
                  fermentum purus nunc, nec lobortis eros lobortis in. Quisque
                  feugiat sodales sollicitudin. Nullam vulputate facilisis
                  turpis in tempor. Pellentesque ac faucibus tellus. Morbi
                  vestibulum tincidunt diam a rutrum.
                </p>
              </div>
              <div className="w-full h-[1px] bg-primaryText mb-4"></div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
