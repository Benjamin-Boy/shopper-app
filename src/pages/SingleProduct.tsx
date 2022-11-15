// Imports React components
import { Product, Featured, Footer, Pagination, Rating } from "../components";

const SingleProduct = () => {
  return (
    <div>
      <Product />
      <Featured title="Related products" />
      <Rating />
      <Pagination />
      <Footer />
    </div>
  );
};

export default SingleProduct;
