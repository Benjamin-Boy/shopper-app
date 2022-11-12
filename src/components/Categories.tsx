// Imports custom hooks
import { useAppSelector } from "../hooks";

const Categories = () => {
  const { products } = useAppSelector((state) => state.products);

  const masterCategories = Array.from(
    new Set(products.map((product) => product.masterCategory).flat())
  );

  const subCategories = Array.from(
    new Set(products.map((product) => product.subCategory).flat())
  );

  const articleTypes = Array.from(
    new Set(products.map((product) => product.articleType).flat())
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
            <li
              key={index}
              className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText"
            >
              {category}
            </li>
          );
        })}
      </ul>
      <ul className="grow">
        <li className="text-xl text-tertiaryText md:text-2xl">Categories</li>
        {subCategories.map((category, index) => {
          return (
            <li
              key={index}
              className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText"
            >
              {category}
            </li>
          );
        })}
      </ul>
      <ul className="grow">
        <li className="text-xl text-tertiaryText md:text-2xl">Clothes</li>
        <li className="grid grid-cols-2">
          {articleTypes.map((category, index) => {
            return (
              <div
                key={index}
                className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText"
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
              className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText"
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
              className="text-l text-primaryText pl-4 my-1 hover:text-tertiaryText"
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
