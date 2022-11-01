import fs from "fs";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

const baseData = JSON.parse(fs.readFileSync("./base-data.json"));
const imagesData = JSON.parse(fs.readFileSync("./images.json"));

const itemsNb = baseData.length;

let items = [];
let brands = [];

const colors = [
  {
    id: 1,
    name: "Cornflower Blue",
    hexCode: "bg-[#2986cc]",
    available: true,
  },
  {
    id: 2,
    name: "Floral White",
    hexCode: "bg-[#EDF3FF]",
    available: true,
  },
  {
    id: 3,
    name: "Android Green",
    hexCode: "bg-[#91b73a]",
    available: true,
  },
  {
    id: 4,
    name: "Chocolate",
    hexCode: "bg-[#873700]",
    available: true,
  },
  {
    id: 5,
    name: "Pine Tree",
    hexCode: "bg-[#2e2b29]",
    available: true,
  },
];

const sizes = [
  {
    size: "Xs",
    available: true,
  },
  {
    size: "S",
    available: true,
  },
  {
    size: "M",
    available: true,
  },
  {
    size: "L",
    available: true,
  },
  {
    size: "Xl",
    available: true,
  },
  {
    size: "Xxl",
    available: true,
  },
];

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createItems = (itemsNb) => {
  for (let i = 0; i < 10; i++) {
    const brand = faker.company.name();

    brands.push(brand);
  }

  for (let i = 0; i < itemsNb; i++) {
    const {
      id,
      productDisplayName,
      gender,
      masterCategory,
      subCategory,
      articleType,
    } = baseData[i];
    const itemCategories = [];
    const itemColors = [];
    const itemRatings = [];

    const colorsRand = getRandomArbitrary(1, 5);
    const ratingsRand = getRandomArbitrary(0, 20);
    const brandRand = brands[getRandomArbitrary(0, brands.length)];

    let imageItem = "";
    let imageId = Number(imagesData[i].id.split(".").splice(0, 1)[0]);

    if (imageId === baseData[i].id) {
      imageItem = imagesData[i].url;
    }

    itemCategories.push(
      baseData[i].masterCategory,
      baseData[i].subCategory,
      baseData[i].articleType
    );

    for (let k = 0; k < ratingsRand; k++) {
      const rating = {
        id: k + 1,
        customerName: faker.name.fullName(),
        rating: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
        date: dayjs(faker.date.past()).format("MM/DD/YYYY"),
        content: faker.lorem.paragraph(),
      };

      itemRatings.push(rating);
    }

    for (let k = 0; k < colorsRand; k++) {
      const color = colors[Math.floor(Math.random() * colors.length)];

      if (!itemColors.includes(color)) {
        itemColors.push(color);
      } else {
        k--;
      }
    }

    const item = {
      id: id,
      brand: brandRand,
      productName: productDisplayName,
      gender: gender,
      categories: itemCategories,
      masterCategory,
      subCategory,
      articleType,
      avgRating: 0,
      ratings: itemRatings,
      price: faker.commerce.price(10, 75, 0),
      colors: itemColors,
      sizes: sizes,
      image: imageItem,
    };

    items.push(item);
  }

  return items;
};

(async () => {
  const generatedItems = createItems(itemsNb);

  let itemsJson = JSON.stringify(generatedItems);

  fs.writeFile("data.json", itemsJson, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
})();
