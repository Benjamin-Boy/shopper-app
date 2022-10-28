// Imports React components
import Footer from "../components/Footer";

// Imports React icons
import { BsArrowRight } from "react-icons/bs";

// Imports assets files
import defaultImg from "../assets/temp/2601.jpg";

const Products = () => {
  const featuredProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="bg-secondaryBg pt-16">
      <div className="flex flex-col gap-8 px-8 pt-8">
        <h1 className="text-4xl text-tertiaryText">Shop all you want</h1>
        <div className="flex justify-between">
          <div className="flex justify-start">
            <h4 className="text-sm text-primaryText">Home / Shop</h4>
          </div>
          <div className="flex justify-end gap-2">
            <h4>150 items</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {featuredProducts.map(() => {
          return (
            <div className="min-w-[200px] max-w-[200px] flex flex-col gap-2 py-8">
              <img src={defaultImg} alt="default" className="rounded-lg" />
              <div className="px-4">
                <div className="flex justify-between">
                  <h4 className="text-primaryText text-xl">Product name</h4>
                  <h4 className="text-primaryText text-xl">Price</h4>
                </div>
                <h4 className="text-primaryText text-xl">Category</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 text-tertiaryText py-16">
        <h3 className="bg-quinternaryBg p-2 rounded-md text-xl">1</h3>
        <h3 className="bg-transparent p-2 rounded-md text-xl">2</h3>
        <h3 className="bg-transparent p-2 rounded-md text-xl">3</h3>
        <h3 className="bg-transparent p-2 rounded-md text-xl">...</h3>
        <h3 className="bg-transparent p-2 rounded-md text-xl">7</h3>
        <h3 className="bg-transparent p-2 rounded-md text-xl flex items-center border border-gray px-4">
          <BsArrowRight />
        </h3>
      </div>
      <div className="flex justify-start pb-16 px-8">
        <h4 className="text-sm text-primaryText">Home / Shop</h4>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
