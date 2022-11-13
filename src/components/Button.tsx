// Imports React router properties
import { Link } from "react-router-dom";

// Imports React icons
import { FaFilter } from "react-icons/fa";

type Props = {
  text: string;
  use: string;
  path?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  toggleCartOpen?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({
  text,
  use,
  path,
  handleClick,
  toggleCartOpen,
}) => {
  if (use === "cart" || use === "home") {
    return (
      <Link
        to={{
          pathname: path,
        }}
        className="text-3xl text-center rounded-md px-8 py-2 border-2 text-secondaryText bg-quaternaryBg border-transparent hover:text-primaryText hover:bg-transparent hover:border-gray"
      >
        <button>{text}</button>
      </Link>
    );
  }

  if (use === "newsletter-desk") {
    return (
      <button className="text-secondaryText border border-gray h-full px-8 rounded-r-lg hover:bg-quinternaryBg hover:text-primaryText">
        {text}
      </button>
    );
  }

  if (use === "newsletter-mobile") {
    return (
      <button className="text-primaryText border border-gray h-full w-full px-8 rounded-b-lg hover:bg-quaternaryBg hover:text-secondaryText">
        {text}
      </button>
    );
  }

  if (use === "cart-trans") {
    return (
      <button
        className={`text-3xl rounded-md px-8 py-2 border-2 text-primaryText bg-transparent border-gray hover:text-primaryText hover:bg-quaternaryBg hover:text-secondaryText hover:border-transparent`}
        onClick={toggleCartOpen}
      >
        {text}
      </button>
    );
  }

  if (use === "filter") {
    return (
      <button className="flex items-center gap-4 bg-quinternaryBg py-2 px-6 my-4 rounded-full">
        <FaFilter />
        <h5 className="text-lg">{text}</h5>
      </button>
    );
  }

  if (use === "clearFilter") {
    return (
      <button
        className="w-full text-xl text-center rounded-md border-2 text-secondaryText bg-quaternaryBg border-transparent hover:text-primaryText hover:bg-transparent hover:border-gray"
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }

  return null;
};

export default Button;
