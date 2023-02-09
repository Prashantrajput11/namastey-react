import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
	name: "restaurant",
	initialState: {
		restaurants: [],
	},
	reducers: {
		addRestaurants: (state, action) => {
			state.restaurants.push(action.payload);
		},
	},
});

export const { addRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
