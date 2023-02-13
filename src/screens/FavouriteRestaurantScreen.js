import React from "react";
import { useSelector } from "react-redux";
import { URL } from "../config";

import { useDispatch } from "react-redux";
import { removeAllFavouriteRestaurant } from "../features/restaurant/restaurantSlice";

const FavouriteRestaurantScreen = () => {
	const dispatch = useDispatch();
	const restaurants = useSelector((store) => store.restaurant.restaurants);
	console.log({ restaurants });

	return (
		<div className="">
			{restaurants.length !== 0 && (
				<button
					onClick={() => dispatch(removeAllFavouriteRestaurant())}
					className="bg-amber-500 px-2 py-2 ml-6 hover:bg-amber-400"
				>
					remove all
				</button>
			)}

			<div className="flex flex-wrap items-center ml-6">
				{restaurants &&
					restaurants.map((restaurant) => (
						<div className="border-2 border-amber-400 w-40 mr-6 my-6  hover:scale-110 hover:cursor-pointer">
							<img
								src={URL + restaurant.cloudinaryImageId}
								height="60px"
								width="100%"
							/>
							<p className="font-body">{restaurant.name}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default FavouriteRestaurantScreen;
