import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "./../redux/productSlice";
import categoryReducer from "./../redux/categorySlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
