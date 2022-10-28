type button = {
  text: string;
};

const Button = ({ text }: button) => {
  return (
    <button className="text-3xl text-secondaryText bg-quaternaryBg rounded-md px-8 py-2">
      {text}
    </button>
  );
};

export default Button;
