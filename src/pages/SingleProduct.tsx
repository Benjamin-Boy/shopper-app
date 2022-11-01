// Imports React components
import Product from "../components/Product";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import PageNumber from "../components/PageNumber";
import Rating from "../components/Rating";

const SingleProduct = () => {
  return (
    <div>
      <Product />
      <Featured title="Related products" />
      <Rating />
      <PageNumber />
      <Footer />
    </div>
  );
};

export default SingleProduct;
