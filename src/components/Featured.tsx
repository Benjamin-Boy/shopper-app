import defaultImg from "../assets/temp/2601.jpg";

type featured = {
  title: string;
};

const Featured = ({ title }: featured) => {
  const featuredProducts = [1, 2, 3];
  const colors = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col gap-14 bg-secondaryBg h-[calc(100vh-60px)] px-8">
      <div className="flex flex-col gap-2 pt-8">
        <h1 className="text-4xl text-tertiaryText">{title}</h1>
        {title === "Featured" && (
          <h2 className="text-xl text-primaryText">Trending this month</h2>
        )}
      </div>
      <div className="flex justify-start gap-8 overflow-x-auto whitespace-nowrap">
        {featuredProducts.map(() => {
          return (
            <div className="min-w-[400px] max-w-[400px] flex flex-col gap-2 py-8">
              <img src={defaultImg} alt="default" className="rounded-lg" />
              <div className="px-4">
                <div className="flex justify-between">
                  <h4 className="text-primaryText text-xl">Product name</h4>
                  <h4 className="text-primaryText text-xl">Price</h4>
                </div>
                {title === "Featured" && (
                  <h4 className="text-primaryText text-xl">Category</h4>
                )}
                {title !== "Featured" && (
                  <div className="flex flex-col">
                    <h4 className="text-lg">Color name</h4>
                    <div className="flex justify-start gap-2">
                      {colors.map(() => {
                        return (
                          <div className="w-[1rem] h-[1rem] bg-tertiaryBg rounded-full"></div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
