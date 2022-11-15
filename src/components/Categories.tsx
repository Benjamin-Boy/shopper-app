// Imports React router components
import { Link } from "react-router-dom";

// Imports custom hooks
import { useAppDispatch, useAppSelector } from "../hooks";

// Imports Redux slices
import { filterProducts } from "../store/features/filterSlice";

const Categories = () => {
  const { products } = useAppSelector((state) => state.products);
  // const { filteredProducts } = useAppSelector(
  //   (state) => state.filters
  // );
  const dispatch = useAppDispatch();

  const masterCategories = Array.from(
    new Set(products.map((product) => product.masterCategory).flat())
  );

  // const subCategories = Array.from(
  //   new Set(products.map((product) => product.subCategory).flat())
  // );

  const articleTypes = Array.from(
    new Set(
      products
        .map(({ subCategory, articleType }) => [subCategory, articleType])
        .flat()
    )
  );

  const genders = Array.from(
    new Set(products.map((product) => product.gender).flat())
  );

  const brands = Array.from(
    new Set(products.map((product) => product.brand).flat())
  );

  return (
    <div className="flex flex-col md:flex-row md:justify-center w-full gap-8">
      <ul className="grow">
        <li className="text-xl text-tertiaryText md:text-2xl">Categories</li>
        {masterCategories.map((category, index) => {
          return (
            <Link to="/products">
              <li
                key={index}
                className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText cursor-default"
                onClick={() => {
                  dispatch(
                    filterProducts({
                      name: category,
                      value: true,
                      filterType: "category",
                    })
                  );
                }}
              >
                {category}
              </li>
            </Link>
          );
        })}
      </ul>
      {/* <ul className="grow">
        <li className="text-xl text-tertiaryText md:text-2xl">Categories</li>
        {subCategories.map((category, index) => {
          return (
            <li
              key={index}
              className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText cursor-default"
            >
              {category}
            </li>
          );
        })}
      </ul> */}
      <ul className="grow">
        <li className="text-xl text-tertiaryText md:text-2xl">Clothes</li>
        <li className="grid grid-cols-2">
          {articleTypes.map((category, index) => {
            return (
              <div
                key={index}
                className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText cursor-default"
              >
                {category}
              </div>
            );
          })}
        </li>
      </ul>
      <ul className="grow">
        <li className="text-xl text-tertiaryText md:text-2xl">Gender</li>
        {genders.map((gender, index) => {
          return (
            <li
              key={index}
              className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText cursor-default"
            >
              {gender}
            </li>
          );
        })}
      </ul>
      <ul className="grow">
        <li className="text-xl text-tertiaryText md:text-2xl">Brands</li>
        {brands.map((brand, index) => {
          return (
            <li
              key={index}
              className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText cursor-default"
            >
              {brand}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
