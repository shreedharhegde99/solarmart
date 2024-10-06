import { Route, Routes } from "react-router-dom";
import HomePageComponent from "../home-page";
import { lazy } from "react";

const ProductsListingComponent = lazy(() => import("../products-listing"));
const ProductPageComponent = lazy(() => import("../product-page"));
const AboutUsPageComponent = lazy(() => import("../about-us-page"));
const SignupPage = lazy(() => import("../signup-page"));
const LoginPageComponent = lazy(() => import("../login-page"));
const CheckoutPageComponent = lazy(() => import("../checkout-page"));

export default function UserRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePageComponent />} />
			<Route path="/about-us" element={<AboutUsPageComponent />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/login" element={<LoginPageComponent />} />
			<Route path="/products" element={<ProductsListingComponent />} />
			<Route path="/products/:product-name" element={<ProductPageComponent />} />
			<Route path="/cart" element={<CheckoutPageComponent />} />
		</Routes>
	);
}
