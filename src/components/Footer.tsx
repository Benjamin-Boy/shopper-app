import Social from "./Social";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between bg-quinternaryBg h-[calc(100vh-60px)]">
      <div className="flex flex-col gap-2 px-8 pt-8">
        <h1 className="text-4xl text-tertiaryText">Shopper</h1>
        <h2 className="text-xl text-primaryText ml-4">About</h2>
        <h2 className="text-xl text-primaryText ml-4">Contact Us</h2>
        <h2 className="text-xl text-primaryText ml-4">FAQ</h2>
      </div>
      <div className="px-8">
        <h2 className="text-xl text-primaryText">Get the latest news</h2>
        <form>
          <input placeholder="Email" className="h-[2.5rem] w-full my-5 pl-4" />
        </form>
      </div>
      <div className="px-8 flex flex-col gap-4">
        <h1 className="text-4xl text-tertiaryText">Social</h1>
        <Social />
      </div>
      <div className="h-[60px] bg-primaryText text-secondaryText flex justify-center items-center">
        <h4>&copy; {new Date().getFullYear()}</h4>
      </div>
    </div>
  );
};

export default Footer;
