import { useSelector } from "react-redux";

import React from "react";

function useItemTotal() {
	const cartItems = useSelector((store) => store.cart.items);

	const getItemTotal = () => {
		let total =
			cartItems &&
			cartItems
				.map((item) => (item.price / 100) * item.itemQuantity)
				.reduce((acc, curr) => acc + curr, 0);

		return total - 45;
	};

	return getItemTotal;
}
export default useItemTotal;
