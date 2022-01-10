import { axiosClient } from "./axiosClient";

const UploadProductAPI = {
  addImageProduct(imageProduct: any) {
    const formData = new FormData();
    formData.append("image", imageProduct);
    const url = `/product/image`;
    return axiosClient.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default UploadProductAPI;
