import Button from "./Button";

const HomeTop = () => {
  return (
    <div className="h-screen flex flex-col justify-start items-center gap-12 px-8 py-12 text-center bg-secondaryBg pt-32">
      <h1 className="text-6xl">Lorem ipsum dolor sit amet. </h1>
      <p className="text-2xl text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at ex ex.
        Donec sed erat elementum, dapibus urna at, volutpat est. Vestibulum
        consectetur nisl non blandit molestie.
      </p>
      <Button text="Shop Now" />
    </div>
  );
};

export default HomeTop;
