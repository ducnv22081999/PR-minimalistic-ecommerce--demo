import { Image } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { selectCategories } from "../../redux/categorySlice";
import {
  getProductList,
  IProductItem,
  selectProductList,
} from "../../redux/productSlice";

const ProductItemDetail = () => {
  const productList = useSelector(selectProductList);
  const categories = useSelector(selectCategories);

  const [itemProduct, setItemProduct] = useState<IProductItem>();

  const dispatch = useDispatch();

  interface IId {
    id: string;
  }

  const history = useHistory();
  const { id } = useParams<IId>();

  useEffect(() => {
    const getProductById = async () => {
      if (id && productList) {
        await productList.map((product) => {
          if (product._id === id) setItemProduct(product);
        });
      }
    };
    if (productList) {
      getProductById();
    } else {
      dispatch(getProductList);
    }
  }, [productList]);

  console.log(itemProduct);

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-4">
              {itemProduct && (
                <Image
                  src={`http://localhost:6969/api/product/photo/${itemProduct._id}`}
                />
              )}
            </div>
            <div className="col-8">
              {itemProduct && <Title level={1}>{itemProduct.name}</Title>}
              {itemProduct && (
                <Title level={5}>{itemProduct.description}</Title>
              )}
              {itemProduct && (
                <Title level={5}>Số lượng: {itemProduct.quantily}</Title>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItemDetail;
