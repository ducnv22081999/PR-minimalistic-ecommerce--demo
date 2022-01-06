import "./App.css";
import Routes from "./Routes/Routes";
import { useDispatch } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { getProductList } from "./redux/productSlice";
import { getCategories } from "./redux/categorySlice";

function App() {
  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   dispatch(getProduct());
  //   dispatch(getCategory());
  // }, []);

  useEffect(() => {
    dispatch(getProductList());
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
