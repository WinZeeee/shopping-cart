import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import { CART, ROOT } from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<Home />} />
      <Route path={CART} element={<Cart />} />
    </Routes>
  );
};

export default RouterConfig;
