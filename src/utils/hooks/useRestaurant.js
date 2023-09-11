import React, { useState, useEffect } from "react";

const useRestaurant = (id) => {
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
		getRestaurantmenu();
	}, []);

	const getRestaurantmenu = async () => {
		const response = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`
		);
		console.log("response", response);
		const json = await response.json();
		setRestaurant(json.data);
	};

	return restaurant;
};

export default useRestaurant;
