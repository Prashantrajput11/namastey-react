import React from "react";

import { FaStar } from "react-icons/fa";

import { restrautList, URL } from "./config.js";

import { addProduct } from "./store/cartSlice.js";
import { useDispatch } from "react-redux";

export default function Food({
	name,
	cloudinaryImageId,
	cuisines,
	avgRating,
	deliveryTime,
	costForTwoString,
	id,
}) {
	const dispatch = useDispatch();

	function handleAddProduct(name, cloudinaryImageId, cuisines, id) {
		dispatch(addProduct({ name, cloudinaryImageId, cuisines, id }));
	}
	return (
		<div className="foodContainer">
			<img src={URL + cloudinaryImageId} className="foodImage" />

			<div style={{ padding: "0 16px" }}>
				<p style={{ fontWeight: "bold", marginBottom: "4px" }}>{name}</p>
				<p style={{ marginBottom: "16px", height: "40px" }}>
					{cuisines.join(", ")}
				</p>
			</div>

			<div className="tag">
				<div className="starRating">
					<FaStar color="white" />
					<span style={{ marginLeft: "6px" }}>{avgRating}</span>
				</div>
				<p>.</p>
				<p>{deliveryTime + "minutes"}</p>
				<p>.</p>
				<p>{costForTwoString}</p>
			</div>

			<div
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#bdc3c7",
					marginTop: 16,
				}}
			></div>
			<div className="addCtaContainer">
				<button
					className="addCta"
					onClick={() =>
						handleAddProduct(name, cloudinaryImageId, cuisines, id)
					}
				>
					Add
				</button>
			</div>
		</div>
	);
}
