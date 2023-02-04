import React, { useState, useEffect } from "react";

const useRestaurant = (id) => {
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
		getRestaurantmenu();
	}, []);

	const getRestaurantmenu = async () => {
		const response = await fetch(
			`https://www.swiggy.com/dapi/menu/v4/full?lat=28.3667854&lng=77.06939799999999&menuId=${id}`
		);

		const json = await response.json();
		setRestaurant(json.data);
	};

	return restaurant;
};

export default useRestaurant;
