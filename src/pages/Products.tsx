// Imports React properties

// Imports React router properties
import { Link } from "react-router-dom";

// Imports custom hooks
import { useAppDispatch, useAppSelector } from "../hooks";

// Imports redux slices
import { toggleFilterOpen } from "../store/features/globalSlice";

// Imports React components
import Footer from "../components/Footer";
import PageNumber from "../components/PageNumber";
import Button from "../components/Button";
import Filters from "../components/Filters";

// Imports data files
// import products from "../data/data.json";

const Products = () => {
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const currency = "£";

  return (
    <div className="bg-secondaryBg pt-16">
      <div className="fixed bottom-0 flex justify-center w-full bg-gradient-to-t from-[#fff] md:hidden">
        <div onClick={() => dispatch(toggleFilterOpen())}>
          <Button use="filter" text="Filter" />
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8 pt-8">
        <h1 className="text-4xl text-tertiaryText">Shop all you want</h1>
        <div className="flex justify-between md:px-16">
          <div className="flex justify-start items-center gap-8">
            <h4 className="text-sm text-primaryText">Home / Shop</h4>
            <div className="hidden md:flex justify-center ">
              <div onClick={() => dispatch(toggleFilterOpen())}>
                <Button use="filter" text="Filter" />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <h4>150 items</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center md:px-16">
        {products.map(({ id, productName, categories, price, image }) => {
          return (
            <Link key={id} to={`/products/${id}`}>
              <div className="flex flex-col gap-2 py-8 max-w-[40%] md:min-w-[350px] md:max-w-[350px] group">
                <img
                  src={image}
                  alt={productName}
                  className="rounded-lg group-hover:scale-105 transition 500ms"
                />
                <div className="px-4 flex flex-col gap-4 group-hover:translate-y-[1.2rem] transition 500ms">
                  <div className="flex justify-between">
                    <h4 className="text-primaryText text-xl">{productName}</h4>
                    <h4 className="text-primaryText text-xl">
                      {currency}
                      {price}
                    </h4>
                  </div>
                  <div className="flex gap-2">
                    {categories.map((category, index) => {
                      return (
                        <h4
                          key={index}
                          className="text-primaryText text-md bg-quinternaryBg px-2 py-1 rounded-lg"
                        >
                          {category}
                        </h4>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <PageNumber />
      <div className="flex justify-start pb-16 px-8">
        <h4 className="text-sm text-primaryText">Home / Shop</h4>
      </div>
      <Footer />
      <Filters />
    </div>
  );
};

export default Products;
