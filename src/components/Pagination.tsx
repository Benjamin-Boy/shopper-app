// Imports React properties

// Imports custom hooks
import { useAppDispatch, useAppSelector } from "../hooks";

// Imports Redux slices
import { setCurrentProductPage } from "../store/features/globalSlice";

// Imports React icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = () => {
  const { filteredProducts } = useAppSelector((state) => state.filters);
  const { currentProductPage, recordsPerPage } = useAppSelector(
    (state) => state.global
  );
  const dispatch = useAppDispatch();

  const onNext = () => {
    dispatch(setCurrentProductPage(currentProductPage + 1));
  };

  const onPrevious = () => {
    dispatch(setCurrentProductPage(currentProductPage - 1));
  };

  const nPages = Math.ceil(filteredProducts.length / recordsPerPage);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <nav>
      <ul className="flex justify-center gap-2 text-tertiaryText bg-secondaryBg pt-4 pb-16">
        <li
          onClick={onPrevious}
          className="bg-transparent p-2 rounded-md text-xl flex items-center border border-gray px-4 cursor-pointer"
        >
          <AiOutlineArrowLeft />
        </li>
        {pageNumbers.map((pageNumber, index) => {
          // if (pageNumber === DOTS) {
          //   return <li className="pagination-item dots">&#8230;</li>;
          // }

          return (
            <li
              key={index}
              onClick={() => dispatch(setCurrentProductPage(pageNumber))}
              className="bg-quinternaryBg p-2 rounded-md text-xl cursor-pointer"
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          onClick={onNext}
          className="bg-transparent p-2 rounded-md text-xl flex items-center border border-gray px-4 cursor-pointer"
        >
          <AiOutlineArrowRight />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
