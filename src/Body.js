import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

import { restrautList, URL } from "./config.js";

import Food from "./Food.js";
console.log(restrautList);

const Body = () => {
	// Init states
	const [searchText, setSearchText] = useState("");

	const [restaurant, setRestaurant] = useState(restrautList);

	// Get filtered list on basis of user search
	function searchHandler(searchText, restaurant) {
		const fd = restaurant.filter((food) =>
			food.data.name.toLowerCase().includes(searchText.toLowerCase())
		);
		console.log(fd);

		return fd;
	}

	return (
		<>
			<input
				type="text"
				placeholder="search.."
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>

			<button
				onClick={() => {
					const data = searchHandler(searchText, restaurant);
					console.log(data);
					setRestaurant(data);
				}}
			>
				search
			</button>

			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{restaurant.map((restaurant, index) => {
					// console.log("here", restaurant.data.id);
					return <Food key={restaurant?.data?.id} {...restaurant?.data} />;
				})}
			</div>
		</>
	);
};

export default Body;
