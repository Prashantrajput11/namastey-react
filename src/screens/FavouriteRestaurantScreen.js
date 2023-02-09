import React from "react";
import { useSelector } from "react-redux";

const FavouriteRestaurantScreen = () => {
	const restaurants = useSelector((store) => store.restaurant.restaurants);

	return (
		<div>
			FavouriteRestaurantScreen
			{restaurants && restaurants.map((restaurant) => <p>{restaurant.name}</p>)}
		</div>
	);
};

export default FavouriteRestaurantScreen;
