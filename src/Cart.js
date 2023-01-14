import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "./config";

import { removeProduct } from "./store/cartSlice";

export default function Cart() {
	const products = useSelector((state) => state.cart);

	console.log(" from cart", products);
	const dispatch = useDispatch();

	function handleRemoveProduct(product_id) {
		dispatch(removeProduct(product_id));
	}

	return (
		<div>
			<p>this is cart</p>

			{products.length > 0
				? products.map((product) => {
						return (
							<div
								key={product.id}
								style={{
									border: "1px solid red",
									width: "200px",
									margin: "20px",
								}}
							>
								<img
									src={URL + product.cloudinaryImageId}
									style={{ width: "100%", height: "200px" }}
								/>
								<p>{product.name}</p>

								<button onClick={() => handleRemoveProduct(product.id)}>
									remove
								</button>
							</div>
						);
				  })
				: "no item"}
		</div>
	);
}
