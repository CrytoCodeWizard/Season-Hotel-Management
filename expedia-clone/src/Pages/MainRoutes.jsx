import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Hotels from "./Hotels";
import SingleProduct from "./SingleProduct";
import CheckoutPage from "./CheckoutPage";
import CreateHotel from "./CreateHotal";
import Pagenot from "./Pagenot";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/addhotel" element={<CreateHotel />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="*" element={<Pagenot />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
