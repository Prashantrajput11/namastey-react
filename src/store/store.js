import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import userSlice from "../features/user/userSlice";
import restaurantSlice from "../features/restaurant/restaurantSlice";
const store = configureStore({
	reducer: {
		cart: cartSlice,
		user: userSlice,
		restaurant: restaurantSlice,
	},
});

export default store;
