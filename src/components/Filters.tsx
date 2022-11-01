// Import React components
import Button from "./Button";

// Imports custom hooks
import { useAppSelector, useAppDispatch } from "../hooks";

// Imports redux slices
import { toggleFilterOpen } from "../store/features/globalSlice";

// Imports Reac icons
import { AiOutlineClose } from "react-icons/ai";

const Filters = () => {
  const { filterOpen } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const genders = ["Women", "Men", "Unisex"];
  const brands = [1, 2, 3, 4, 5, 6];
  const materials = [1, 2, 3, 4, 5, 6, 7, 8];
  const colors = [1, 2, 3, 4, 5];

  return (
    <div
      className={`z-10 fixed top-[60px] left-0 flex flex-col gap-6 w-[25rem] h-[calc(100vh-60px)] bg-quinternaryBg p-4 ${
        filterOpen ? "animate-filterToggle" : "animate-filterToggleReverse"
      }`}
    >
      <div
        className="flex justify-end text-2xl"
        onClick={() => dispatch(toggleFilterOpen())}
      >
        <AiOutlineClose />
      </div>
      <ul className="">
        <li className="text-xl md:text-2xl">Category</li>
        <li className="flex flex-wrap">
          {categories.map(() => {
            return (
              <div className="text-lg pl-4 my-1 flex gap-1">
                <input type="checkbox" />
                <h2>Category</h2>
              </div>
            );
          })}
        </li>
      </ul>
      <ul className="">
        <li className="text-xl md:text-2xl">Gender</li>
        <li className="flex flex-wrap">
          {genders.map(() => {
            return (
              <div className="text-lg pl-4 my-1 flex gap-1">
                <input type="checkbox" />
                <h2>Gender</h2>
              </div>
            );
          })}
        </li>
      </ul>
      <ul className="">
        <li className="text-xl md:text-2xl">Brand</li>
        <li className="flex flex-wrap">
          {brands.map(() => {
            return (
              <div className="text-lg pl-4 my-1 flex gap-1">
                <input type="checkbox" />
                <h2>Brand</h2>
              </div>
            );
          })}
        </li>
      </ul>
      <ul className="">
        <li className="text-xl md:text-2xl">Material</li>
        <li className="flex flex-wrap">
          {materials.map(() => {
            return (
              <div className="text-lg pl-4 my-1 flex gap-1">
                <input type="checkbox" />
                <h2>Material</h2>
              </div>
            );
          })}
        </li>
      </ul>
      <div className="flex flex-col gap-4">
        <h4 className="text-lg">Color</h4>
        <div className="flex justify-start gap-2 pl-4">
          {colors.map(() => {
            return (
              <div className="w-[2rem] h-[2rem] bg-secondaryBg rounded-full"></div>
            );
          })}
        </div>
      </div>
      <ul className="">
        <li className="text-xl md:text-2xl">Price</li>
        <li className="text-lg pl-4 my-1">
          <input type="range" />
        </li>
      </ul>
      <Button text="Clear filters" use="clearFilter" />
    </div>
  );
};

export default Filters;
