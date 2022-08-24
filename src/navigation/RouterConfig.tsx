import { Route, Routes } from "react-router-dom";
import { CART, ROOT } from "../constants";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<Home />} />
      <Route path={CART} element={<Cart />} />
    </Routes>
  );
};

export default RouterConfig;
