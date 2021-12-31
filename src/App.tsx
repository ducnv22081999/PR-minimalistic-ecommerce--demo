import "./App.css";
import Routes from "./Routes/Routes";
import { useDispatch } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { getProducts } from "./redux/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
