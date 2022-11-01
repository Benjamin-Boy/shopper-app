// Imports React components
import Social from "./Social";
import Categories from "./Categories";

import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between bg-quinternaryBg min-h-[calc(100vh-60px)]">
      <div className="hidden md:block">
        <Newsletter />
      </div>
      <div className="md:flex md:flex-row md:justify-around md:border-y md:border-gray py-16">
        <div className="flex flex-col justify-between gap-16 md:w-[30%]">
          <div className="flex flex-col gap-2 px-8">
            <h1 className="text-4xl text-tertiaryText">Shopper</h1>
            <h2 className="text-xl text-primaryText ml-4">About</h2>
            <h2 className="text-xl text-primaryText ml-4">Contact Us</h2>
            <h2 className="text-xl text-primaryText ml-4">FAQ</h2>
          </div>
          <div className="block md:hidden">
            <Newsletter />
          </div>
          <div className="px-8 flex flex-col gap-4">
            <h1 className="text-4xl text-tertiaryText">Social</h1>
            <Social />
          </div>
        </div>
        <div className="hidden md:block md:w-[70%]">
          <Categories />
        </div>
      </div>
      <div className="h-[60px] bg-primaryText text-secondaryText flex justify-center items-center">
        <h4>&copy; {new Date().getFullYear()}</h4>
      </div>
    </div>
  );
};

export default Footer;
