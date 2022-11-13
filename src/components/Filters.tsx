// Import React components
import Button from "./Button";

// Imports custom hooks
import { useAppSelector, useAppDispatch } from "../hooks";

// Imports redux slices
import { toggleFilterOpen } from "../store/features/globalSlice";
import { filterProducts, clearFilters } from "../store/features/filterSlice";

// Imports Reac icons
import { BiChevronsLeft } from "react-icons/bi";
import { useEffect } from "react";

const Filters = () => {
  const { filterOpen } = useAppSelector((state) => state.global);
  const { products } = useAppSelector((state) => state.products);
  const { price, maxPrice, minPrice } = useAppSelector(
    (state) => state.filters.filters
  );
  const dispatch = useAppDispatch();

  const masterCategories = Array.from(
    new Set(products.map((product) => product.masterCategory).flat())
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

  const colorsTemp = products.map((product) => product.colors).flat();
  const colors = [];
  const uniqueColorsSet = new Set();

  for (const color of colorsTemp) {
    const colorJSON = JSON.stringify(color);
    if (!uniqueColorsSet.has(colorJSON)) {
      colors.push(color);
    }

    uniqueColorsSet.add(colorJSON);
  }

  useEffect(() => {
    dispatch(filterProducts(products));
  }, []);

  return (
    <div
      className={`z-10 fixed top-[60px] left-0 flex flex-col gap-2 w-[25rem] h-[calc(100vh-60px)] bg-quinternaryBg px-4 pt-2 ${
        filterOpen ? "animate-filterToggle" : "animate-filterToggleReverse"
      }`}
    >
      <div
        className="absolute right-[-2rem] flex justify-end text-2xl"
        onClick={() => dispatch(toggleFilterOpen())}
      >
        <BiChevronsLeft />
      </div>
      <ul className="">
        <li className="text-lg">Category</li>
        <li className="flex flex-wrap">
          {masterCategories.map((category, index) => {
            return (
              <div key={index} className="text-sm pl-4 my-1 flex gap-1">
                <input
                  type="checkbox"
                  name={category}
                  data-filter-type="category"
                  onClick={(e) =>
                    dispatch(
                      filterProducts({
                        name: (e.currentTarget as HTMLInputElement).name,
                        value: (e.currentTarget as HTMLInputElement).checked,
                        filterType: (e.currentTarget as HTMLInputElement)
                          .dataset.filterType,
                      })
                    )
                  }
                />
                <h2>{category}</h2>
              </div>
            );
          })}
        </li>
      </ul>
      <ul className="">
        <li className="text-lg">Type</li>
        <li className="flex flex-wrap">
          {articleTypes.map((type, index) => {
            return (
              <div key={index} className="text-sm pl-4 my-1 flex gap-1">
                <input
                  type="checkbox"
                  name={type}
                  data-filter-type="clothType"
                  onClick={(e) =>
                    dispatch(
                      filterProducts({
                        name: (e.currentTarget as HTMLInputElement).name,
                        value: (e.currentTarget as HTMLInputElement).checked,
                        filterType: (e.currentTarget as HTMLInputElement)
                          .dataset.filterType,
                      })
                    )
                  }
                />
                <h2>{type}</h2>
              </div>
            );
          })}
        </li>
      </ul>
      <ul className="">
        <li className="text-lg">Gender</li>
        <li className="flex flex-wrap">
          {genders.map((gender, index) => {
            return (
              <div key={index} className="text-sm pl-4 my-1 flex gap-1">
                <input
                  type="checkbox"
                  name={gender}
                  data-filter-type="gender"
                  onClick={(e) =>
                    dispatch(
                      filterProducts({
                        name: (e.currentTarget as HTMLInputElement).name,
                        value: (e.currentTarget as HTMLInputElement).checked,
                        filterType: (e.currentTarget as HTMLInputElement)
                          .dataset.filterType,
                      })
                    )
                  }
                />
                <h2>{gender}</h2>
              </div>
            );
          })}
        </li>
      </ul>
      <ul className="">
        <li className="text-lg">Brand</li>
        <li className="flex flex-wrap">
          {brands.map((brand, index) => {
            return (
              <div key={index} className="text-sm pl-4 my-1 flex gap-1">
                <input
                  type="checkbox"
                  name={brand}
                  data-filter-type="brand"
                  onClick={(e) =>
                    dispatch(
                      filterProducts({
                        name: (e.currentTarget as HTMLInputElement).name,
                        value: (e.currentTarget as HTMLInputElement).checked,
                        filterType: (e.currentTarget as HTMLInputElement)
                          .dataset.filterType,
                      })
                    )
                  }
                />
                <h2>{brand}</h2>
              </div>
            );
          })}
        </li>
      </ul>
      <div className="flex flex-col gap-4">
        <h4 className="text-lg">Color</h4>
        <ul className="flex justify-start items-center gap-2 pl-4">
          {colors.map(({ name, hexCode }, index) => {
            return (
              <li key={index} className="relative group">
                <input
                  type="checkbox"
                  className={`w-[2rem] h-[2rem] ${hexCode} rounded-full group appearance-none checked:border-2 checked:border-tertiaryText`}
                  onChange={(e) => {
                    dispatch(
                      filterProducts({
                        name,
                        value: (e.currentTarget as HTMLInputElement).checked,
                        filterType: "color",
                      })
                    );
                  }}
                />
                <h4
                  className={`absolute top-[-2rem] whitespace-nowrap px-2 rounded-md opacity-0 text-sm text-primaryText group-hover:opacity-100`}
                >
                  {name}
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        <div className="flex gap-4">
          <h2 className="text-lg">Price</h2>
          <h5 className="text-lg">&lt; £{price}</h5>
        </div>
        <div className="text-lg pl-4 my-1 flex gap-4">
          <input
            type="range"
            onChange={(e) =>
              dispatch(
                filterProducts({
                  value: (e.currentTarget as HTMLInputElement).value,
                  filterType: "price",
                })
              )
            }
            min={minPrice}
            max={maxPrice}
            value={price}
          />
        </div>
      </div>
      <div className="w-full">
        <Button
          text="Clear filters"
          use="clearFilter"
          handleClick={() => dispatch(clearFilters())}
        />
      </div>
    </div>
  );
};

export default Filters;
