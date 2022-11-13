import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Hotels from "./Hotels";
import SingleProduct from "./SingleProduct";
import CheckoutPage from "./CheckoutPage";
import CreateHotel from "./CreateHotal";
import Pagenot from "./Pagenot";
import CreateAccount from "./SignUp";
import Login from "./Login";
import ProfileEdit from "./ProfileEdit";
import ConfirmBooking from "./ConfirmBooking";
import Trips from "./Trips";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<SingleProduct />} />
        <Route path="/hotels/:id/checkout" element={<CheckoutPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        <Route path="/admin" element={<CreateHotel />} />
        <Route path="/bookingConfirmed" element={<ConfirmBooking />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="*" element={<Pagenot />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
