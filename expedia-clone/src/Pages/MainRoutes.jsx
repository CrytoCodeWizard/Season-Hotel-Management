import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Hotels from "./Hotels";
import SingleProduct from "./SingleProduct";
import CheckoutPage from "./CheckoutPage";
import CreateHotel from "./CreateHotal";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/hotels/:id" element={<SingleProduct />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/addhotel" element={<CreateHotel />}></Route>
        <Route path="*" element={<div>Page not Found</div>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
