// Imports custom hooks
import { useAppDispatch } from "../hooks";

// Imports redux slices
import { toggleCategoriesOpen } from "src/store/features/globalSlice";

//Imports React icons
import { BiChevronDown } from "react-icons/bi";

const Navlinks = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <ul className="flex flex-col gap-4 md:flex-row md:gap-8">
        <li
          className="flex items-center gap-1 text-2xl"
          onClick={() => dispatch(toggleCategoriesOpen())}
        >
          Shop
          <span>
            <BiChevronDown />
          </span>
        </li>
        <li className="text-2xl">About</li>
        <li className="text-2xl">Articles</li>
      </ul>
    </div>
  );
};

export default Navlinks;
