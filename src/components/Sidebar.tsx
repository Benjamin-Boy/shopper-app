import Social from "./Social";

const Sidebar = () => {
  return (
    <div className="bg-tertiaryBg text-tertiaryText px-8 py-8 flex flex-col justify-between h-[calc(100vh-60px)]">
      <div className="text-4xl flex flex-col gap-8">
        <h1>Shop Now</h1>
        <h1>About</h1>
        <h1>Articles</h1>
      </div>

      <div className="flex flex-col gap-8">
        <div className="bg-primaryText h-[1px] my-2.5"></div>

        <div className="text-3xl flex flex-col gap-4">
          <h2>Contact Us</h2>
          <h2>FAQ</h2>
        </div>

        <Social />
      </div>
    </div>
  );
};

export default Sidebar;
