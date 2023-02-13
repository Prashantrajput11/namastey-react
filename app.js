// React imports
import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Router,
	RouterProvider,
	Outlet,
} from "react-router-dom";

// Icon imports
import { FaUserAlt } from "react-icons/fa";

// Other component imports
import Help from "./src/components/Help";
import Error from "./src/components/Error";
import LandingScreen from "./src/screens/LandingScreen";
import HelpScreen from "./src/screens/HelpScreen";
import OffersScreen from "./src/screens/OffersScreen";
import Header from "./src/components/Header";
import RestaurantMenuScreen from "./src/screens/RestaurantMenuScreen";
import SignInScreen from "./src/screens/SignInScreen";
import CartScreen from "./src/screens/CartScreen";

// store imports
import store from "./src/store/store";
import { Provider } from "react-redux";
import FavouriteRestaurantScreen from "./src/screens/FavouriteRestaurantScreen";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
// component

// redux persist
let persistor = persistStore(store);

// App
const AppLayout = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Header />
				<Outlet />
			</PersistGate>
		</Provider>
	);
};
const appRoute = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <LandingScreen />,
			},

			{
				path: "/fav",
				element: <FavouriteRestaurantScreen />,
			},
			{
				path: "/help",
				element: <HelpScreen />,
			},
			{
				path: "/offers",
				element: <OffersScreen />,
			},
			{
				path: "/sign",
				element: <SignInScreen />,
			},
			{
				path: "/cart",
				element: <CartScreen />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenuScreen />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
