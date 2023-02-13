import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
	name: "restaurant",
	initialState: {
		restaurants: [],
	},
	reducers: {
		addRestaurants: (state, action) => {
			// check if restuarnat is already added to fav

			const restaurant_is_favourited = state.restaurants.find(
				(restaurant) => restaurant.id === action.payload.id
			);
			if (!restaurant_is_favourited) {
				state.restaurants.push(action.payload);
			}
		},
		removeRestaurants: (state, action) => {
			const remove = state.restaurants.filter(
				(item) => item.id !== action.payload.id
			);

			state.restaurants = remove;
		},

		removeAllFavouriteRestaurant: (state, action) => {
			state.restaurants = [];
		},
	},
});

export const {
	addRestaurants,
	removeRestaurants,
	removeAllFavouriteRestaurant,
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
