// Imports React icons
import { BsArrowRight } from "react-icons/bs";

const PageNumber = () => {
  return (
    <div className="flex justify-center gap-2 text-tertiaryText bg-secondaryBg pt-4 pb-16">
      <h3 className="bg-quinternaryBg p-2 rounded-md text-xl">1</h3>
      <h3 className="bg-transparent p-2 rounded-md text-xl">2</h3>
      <h3 className="bg-transparent p-2 rounded-md text-xl">3</h3>
      <h3 className="bg-transparent p-2 rounded-md text-xl">...</h3>
      <h3 className="bg-transparent p-2 rounded-md text-xl">7</h3>
      <h3 className="bg-transparent p-2 rounded-md text-xl flex items-center border border-gray px-4">
        <BsArrowRight />
      </h3>
    </div>
  );
};

export default PageNumber;
