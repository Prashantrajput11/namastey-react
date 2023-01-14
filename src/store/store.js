// store config file
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice.js";
const store = configureStore({
	reducer: {
		cart: cartReducer,

		// further slices will go here
	},
});

export default store;
