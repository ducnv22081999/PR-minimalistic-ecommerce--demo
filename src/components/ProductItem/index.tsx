import "./ProductItem.css";
import addCartButton from "./../assets/img/add-to-cart-button.png";
import product1 from "./../assets/img/product1.png";
import { IProductItem } from "../../redux/productSlice";

interface Props {
  data: IProductItem;
}

const ProductItem = ({ data }: Props) => {
  return (
    <div className="col-4 pb-4 product__item__col">
      <div className="product__card">
        <div className="product__img">
          <img src={product1} alt="image" />
        </div>
        <div className="product__body">
          <div className="d-flex align-items-center justify-content-between product__name__price">
            <div className="product__name">
              <h3 className="name">{data.name}</h3>
              <span className="info">{data.category_id}</span>
            </div>
            <div className="product__price">
              <h4 className="price">${data.price}</h4>
            </div>
          </div>
          <div className="d-flex justify-content-between product__rating__buy">
            <div className="product__rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="product__buy">
              <a>
                <img src={addCartButton} alt="image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
