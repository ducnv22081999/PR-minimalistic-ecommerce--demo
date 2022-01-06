import "./ProductList.css";
import ProductItem from "../ProductItem";
import { useSelector } from "react-redux";
import { selectProductList } from "../../redux/productSlice";
import { selectCategories } from "../../redux/categorySlice";

const ProductList = () => {
  const productList = useSelector(selectProductList);
  const categories = useSelector(selectCategories);

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {productList.map((product, index) => (
            <ProductItem key={index} data={product} categories={categories} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
