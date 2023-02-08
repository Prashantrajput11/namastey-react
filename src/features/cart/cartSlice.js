import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		restaurants: [],
		// itemQuantity: 0,
	},
	reducers: {
		addItemToCart: (state, action) => {
			const itemPresent = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (itemPresent) {
				itemPresent.itemQuantity++;
			} else {
				state.items.push({
					...action.payload,
					itemQuantity: 1,
				});
			}
		},

		incrementQuantity: (state, action) => {
			const itemPresent = state.items.find(
				(item) => item.id === action.payload.id
			);

			itemPresent && itemPresent.itemQuantity++;
		},

		decrementQuantity: (state, action) => {
			// check if item is present
			const item = state.items.find((item) => item.id === action.payload.id);
			if (item.itemQuantity === 1) {
				// if item quantity is 1, remove that from items array
				const removeItem = state.items.filter(
					(item) => item.id !== action.payload.id
				);
				state.items = removeItem;
			} else {
				item.itemQuantity--;
			}
		},
		addRestaurants: (state, action) => {
			state.restaurants.push(action.payload);
		},
		removeItemFromCart: (state, action) => {},
		cleartCart: (state, action) => {
			state.items = []; // clear the items array
		},
	},
});

//exports
export const {
	addItemToCart,
	removeItemFromCart,
	cleartCart,
	addRestaurants,
	incrementQuantity,
	decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
