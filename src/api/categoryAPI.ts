import { ICategoryItem } from "../redux/categorySlice";
import { axiosClient } from "./axiosClient";

const CategoryAPI = {
  getAll() {
    const url = `/category`;
    return axiosClient.get(url);
  },
  addCategory(itemCategory: Omit<ICategoryItem, "_id">) {
    const url = `/category`;
    return axiosClient.post(url, itemCategory);
  },
  deleteCategory(idCategory: string) {
    const url = `/category/${idCategory}`;
    return axiosClient.delete(url);
  },
  updateCategory(itemCategory: ICategoryItem) {
    const url = `/category/${itemCategory._id}`;
    return axiosClient.put(url, itemCategory);
  },
};

export default CategoryAPI;
