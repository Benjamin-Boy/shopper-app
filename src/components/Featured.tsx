// Imports React router components
import { Link } from "react-router-dom";

// Imports custom hooks
import { useAppSelector } from "../hooks";

type Props = {
  title: string;
};

const Featured: React.FC<Props> = ({ title }) => {
  const { products } = useAppSelector((state) => state.products);

  const featuredProducts = [];

  for (let i = 0; i < 12; i++) {
    const randProduct = Math.floor(Math.random() * products.length);

    featuredProducts.push(products[randProduct]);
  }

  return (
    <div className="flex flex-col gap-14 bg-secondaryBg h-[calc(100vh-60px)] p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl text-tertiaryText">{title}</h1>
        {title === "Featured" && (
          <h2 className="text-xl text-primaryText">Trending this month</h2>
        )}
      </div>
      <div className="flex justify-start gap-4 overflow-x-auto whitespace-nowrap md:h-full">
        {featuredProducts.map(
          ({ id, productName, price, categories, image, colors }) => {
            return (
              <Link key={id} to={`/products/${id}#product`} className="h-full">
                <div className="flex flex-col gap-4 md:h-full min-w-[60%] max-w-[380px] md:min-w-[380px] md:max-w-[380px] group">
                  <img
                    src={image}
                    alt={productName}
                    className="rounded-lg group-hover:scale-105 transition 500ms"
                  />
                  <div className="flex flex-col justify-between gap-2 px-4 group-hover:translate-y-[1.2rem] transition 500ms">
                    <div className="flex justify-between">
                      <h4 className="text-primaryText text-xl whitespace-normal">
                        {productName}
                      </h4>
                      <h4 className="text-primaryText text-xl">£{price}</h4>
                    </div>

                    <div className="flex gap-2">
                      {categories.map((category, index) => {
                        return (
                          <h4
                            key={index}
                            className="text-primaryText text-md bg-quinternaryBg px-2 py-1 rounded-lg"
                          >
                            {category}
                          </h4>
                        );
                      })}
                    </div>

                    {title !== "Featured" && (
                      <div className="flex flex-col">
                        <div className="flex justify-start gap-2">
                          {colors.map(({ id, hexCode }) => {
                            return (
                              <div
                                key={id}
                                className={`w-[1rem] h-[1rem] ${hexCode} rounded-full`}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Featured;
