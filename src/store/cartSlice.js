const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
	name: "cart", // name of slice
	initialState, // initial state
	reducers: {
		addProduct: (state, action) => {
			// push in initial state
			state.push(action.payload);
		},

		removeProduct: (state, action) => {
			return state.filter(
				(item) => item.id !== action.payload // in payload id of item will be passed
			);
		},
	}, // list of reducers
});

export const { addProduct, removeProduct } = cartSlice.actions; /// export action

export default cartSlice.reducer; // export reducer
