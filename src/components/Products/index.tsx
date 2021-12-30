import "./Products.css";
import ProductItem from "../ProductItem";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/productSlice";

const Products = () => {
  const products = useSelector(selectProducts);

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <ProductItem key={index} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
