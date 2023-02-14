import React from "react";
import { useSelector } from "react-redux";
import { URL } from "../config";

import { useDispatch } from "react-redux";
import { removeAllFavouriteRestaurant } from "../features/restaurant/restaurantSlice";

import { FaStar } from "react-icons/fa";

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
						<div className="mr-6 my-6  w-72 px-2 py-2 hover:cursor-pointer hover:border-amber-500 hover: border-2 transition:all">
							<img
								src={URL + restaurant.cloudinaryImageId}
								height="90px"
								width="100%"
							/>
							<p className="font-body text-sm mt-2">{restaurant.name}</p>
							<div className="flex items-center bg-lime-600  px-2 w-16">
								<FaStar color="white" />
								<p className="ml-2">{restaurant.avgRating}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default FavouriteRestaurantScreen;
