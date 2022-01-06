import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductAPI from "../api/productAPI";
import { RootState } from "../app/store";

export interface IProductItem {
  _id: string;
  name: string;
  category_id: string;
  rating: string;
  price: string;
  thumbnail_cdn: string;
}

export interface ProductState {
  productList: IProductItem[];
}

const initialState: ProductState = {
  productList: [],
};
//
export const getProductList = createAsyncThunk(
  "product/getProductList",
  async () => {
    const response = await ProductAPI.getAll();
    return response.data;
  }
);
//
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (itemProduct: Omit<IProductItem, "_id">) => {
    const response = await ProductAPI.addProduct(itemProduct);
    return response.data;
  }
);
//
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (idProduct: string) => {
    const response = await ProductAPI.deleteProduct(idProduct);
    return response.data;
  }
);
//
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (itemProduct: IProductItem) => {
    const response = await ProductAPI.updateProduct(itemProduct);
    return response.data;
  }
);
//

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getProducts: (state, action: PayloadAction<IProductItem[]>) => {
    //   return {
    //     ...state,
    //     products: [...action.payload],
    //   };
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.productList = [...action.payload];
    });
    //
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.productList = [...state.productList, action.payload];
    });
    //
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.productList = state.productList.filter(
        (product) => product._id !== action.payload
      );
    });
    //
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const list = state.productList.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      });
      state.productList = [...list];
    });
    //
  },
});

export const selectProductList = (state: RootState) =>
  state.product.productList;

// export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
