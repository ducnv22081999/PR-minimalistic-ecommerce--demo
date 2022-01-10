import { IProductItem } from "../redux/productSlice";
import { axiosClient } from "./axiosClient";

const ProductAPI = {
  getAll() {
    const url = `/product`;
    return axiosClient.get(url);
  },
  addProduct(itemProduct: Omit<IProductItem, "_id" | "slug">) {
    // const formData = new FormData();
    // formData.append("name", itemProduct.name);
    // formData.append("category_id", itemProduct.category_id);
    // formData.append("rating", itemProduct.rating);
    // formData.append("quantily", itemProduct.quantily);
    // formData.append("price", itemProduct.price);
    // formData.append("description", itemProduct.description);
    // formData.append("thumbnail_cdn", itemProduct.thumbnail_cdn);

    const url = `/product`;
    return axiosClient.post(url, itemProduct);
  },
  deleteProduct(idProduct: string) {
    const url = `/product/${idProduct}`;
    return axiosClient.delete(url);
  },
  updateProduct(itemProduct: Omit<IProductItem, "slug">) {
    const url = `/product/${itemProduct._id}`;
    return axiosClient.put(url, itemProduct);
  },
};

export default ProductAPI;
