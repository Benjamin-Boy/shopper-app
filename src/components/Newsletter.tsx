// Imports React components
import Button from "./Button";

const Newsletter = () => {
  return (
    <>
      <div className="hidden md:flex flex flex-col gap-4 items-center px-8 py-12 bg-quaternaryBg">
        <h2 className="w-[40%] text-xl text-secondaryText text-left">
          Get the latest news
        </h2>
        <form className="h-[2.5rem] w-[40%] flex items-center">
          <input
            placeholder="Email"
            className="h-full w-full my-5 pl-4 rounded-l-lg"
          />
          <Button text="Subscribe" use="newsletter-desk" />
        </form>
      </div>

      <div className="block md:hidden px-8">
        <h2 className="text-xl text-primaryText mb-4">Get the latest news</h2>
        <form className="h-[2.5rem] w-full">
          <input
            placeholder="Email"
            className="h-full w-full pl-4 rounded-t-lg"
          />

          <Button text="Subscribe" use="newsletter-mobile" />
        </form>
      </div>
    </>
  );
};

export default Newsletter;
