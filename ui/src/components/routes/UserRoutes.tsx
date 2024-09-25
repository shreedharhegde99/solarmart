import { Route, Routes } from "react-router-dom";
import Signup from "../auth/Signup";
import UserAuth from "../auth/UserAuth";
import Home from "../Home";
import AllProducts from "../products/AllProducts";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<UserAuth />} />
      <Route path="/products" element={<AllProducts />} />
    </Routes>
  );
}
