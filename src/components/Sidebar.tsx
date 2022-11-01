import Social from "./Social";
import Categories from "./Categories";
import Navlinks from "./Navlinks";

// Imports custom hooks
import { useAppSelector } from "../hooks";

const Sidebar = () => {
  const { sidebarOpen } = useAppSelector((state) => state.global);

  return (
    <div
      className={`absolute top-[60px] bg-tertiaryBg text-tertiaryText px-8 py-8 flex flex-col justify-between h-[calc(100vh-60px)] w-full overflow-auto ${
        sidebarOpen ? "animate-sidebarToggle" : "animate-sidebarToggleReverse"
      }`}
    >
      <div className="text-3xl flex flex-col gap-8">
        <Navlinks />
        <div className="bg-primaryText h-[1px] my-2.5"></div>
      </div>

      <div>
        <Categories />
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
