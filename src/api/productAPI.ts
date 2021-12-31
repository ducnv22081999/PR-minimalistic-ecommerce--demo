import { IProductItem } from "../redux/productSlice";
import { axiosClient } from "./axiosClient";

const ProductAPI = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  addProduct(itemProduct: IProductItem) {
    const url = `/products`;
    return axiosClient.post(url, itemProduct);
  },
  deleteProduct(idProduct: string) {
    const url = `/products/${idProduct}`;
    return axiosClient.delete(url);
  },
  updateProduct(itemProduct: IProductItem) {
    const url = `/products/${itemProduct.id}`;
    return axiosClient.put(url, itemProduct);
  },
};

export default ProductAPI;
