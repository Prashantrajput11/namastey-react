import React from "react";
import ReactDOM from "react-dom/client";
import { FaUserAlt } from "react-icons/fa";
import { Provider } from "react-redux";
import store from "./src/store/store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./src/Body";
import Cart from "./src/Cart";
import Header from "./src/Header";

const AppLayout = () => {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Body />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
