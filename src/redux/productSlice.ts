import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface IProductItem {
  _id: string;
  name: string;
  category_id: number;
  price: number;
  rating: number;
  url_image: string;
}

export interface ProductState {
  products: IProductItem[];
}

const initialState: ProductState = {
  products: [
    {
      _id: "1",
      name: "Coombes",
      category_id: 2,
      price: 2.6,
      rating: 4,
      url_image: "https://via.placeholder.com/300x257",
    },
    {
      _id: "1",
      name: "Coombes",
      category_id: 2,
      price: 2.6,
      rating: 4,
      url_image: "https://via.placeholder.com/300x257",
    },
    {
      _id: "1",
      name: "Coombes",
      category_id: 2,
      price: 2.6,
      rating: 4,
      url_image: "https://via.placeholder.com/300x257",
    },
    {
      _id: "1",
      name: "Coombes",
      category_id: 2,
      price: 2.6,
      rating: 4,
      url_image: "https://via.placeholder.com/300x257",
    },
    {
      _id: "1",
      name: "Coombes",
      category_id: 2,
      price: 2.6,
      rating: 4,
      url_image: "https://via.placeholder.com/300x257",
    },
    {
      _id: "1",
      name: "Coombes",
      category_id: 2,
      price: 2.6,
      rating: 4,
      url_image: "https://via.placeholder.com/300x257",
    },
    {
      _id: "1",
      name: "Coombes",
      category_id: 2,
      price: 2.6,
      rating: 4,
      url_image: "https://via.placeholder.com/300x257",
    },
    {
      _id: "1",
      name: "Coombes",
      category_id: 2,
      price: 2.6,
      rating: 4,
      url_image: "https://via.placeholder.com/300x257",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.product.products;

export default productSlice.reducer;
