import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductAPI from "../api/productAPI";
import { RootState } from "../app/store";

export interface IProductItem {
  id: string;
  name: string;
  categoryId: string;
  rating: number;
  price: number;
  thumbnail_cdn: string;
}

export interface ProductState {
  products: IProductItem[];
}

const initialState: ProductState = {
  products: [],
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await ProductAPI.getAll();
  return response.data;
});
//
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (itemProduct: IProductItem) => {
    const response = await ProductAPI.addProduct(itemProduct);
    return response.data;
  }
);
//
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (idProduct: string) => {
    console.log(idProduct);
    const response = await ProductAPI.deleteProduct(idProduct);
    return response.data;
  }
);

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
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = [...action.payload];
    });
    //
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products = [...state.products, action.payload];
    });
    //
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    });
  },
});

export const selectProducts = (state: RootState) => state.product.products;

// export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
