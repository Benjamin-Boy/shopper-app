// Imports React router properties
import { useParams } from "react-router-dom";

// Imports React icons
import { AiTwotoneStar } from "react-icons/ai";

// Imports data files
import products from "../data/data.json";

const Rating = () => {
  const { id } = useParams();

  const product = products.filter((rating) => rating.id === Number(id));

  return (
    <div className="px-8 py-16 bg-secondaryBg">
      {product[0].ratings.map(({ id, customerName, rating, date, content }) => {
        return (
          <div key={id} className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2">
              <h2 className="text-2xl">{customerName}</h2>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xl">.</span>
                <span className="text-xl">
                  <AiTwotoneStar />
                </span>
                <span className="text-xl">{rating}</span>
                <span className="text-xl">.</span>
              </div>
              <div>
                <h3 className="text-lg">{date}</h3>
              </div>
            </div>
            <div>
              <p>{content}</p>
            </div>
            <div className="w-full h-[1px] bg-primaryText mb-4"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
