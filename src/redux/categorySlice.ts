import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoryAPI from "../api/categoryAPI";
import { RootState } from "../app/store";

export interface ICategoryItem {
  _id: string;
  name: string;
}

export interface CategoryState {
  categories: ICategoryItem[];
}

const initialState: CategoryState = {
  categories: [],
};
//
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const response = await CategoryAPI.getAll();
    return response.data;
  }
);
//
export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (itemCategory: Omit<ICategoryItem, "_id">) => {
    const response = await CategoryAPI.addCategory(itemCategory);
    return response.data;
  }
);
//
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (idCategory: string) => {
    const response = await CategoryAPI.deleteCategory(idCategory);
    return response.data;
  }
);
//
export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (itemCategory: ICategoryItem) => {
    const response = await CategoryAPI.updateCategory(itemCategory);
    return response.data;
  }
);
//

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = [...action.payload];
    });
    //
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.categories = [...state.categories, action.payload];
    });
    //
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (category) => category._id !== action.payload
      );
    });
    //
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      const list = state.categories.map((category) => {
        if (category._id === action.payload._id) {
          return action.payload;
        }
        return category;
      });
      state.categories = [...list];
    });
    //
  },
});

export const getNameCateFromId = (
  categories: ICategoryItem[],
  idCategory: string
) => {
  const nameCate = categories.filter((cate) => cate._id === idCategory);

  return nameCate[0] ? nameCate[0].name : "Invalid category...";
};

export const selectCategories = (state: RootState) => state.category.categories;

export default categorySlice.reducer;
