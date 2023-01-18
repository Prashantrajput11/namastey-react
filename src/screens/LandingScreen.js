// React Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// component imports
import FoodCard from "../components/FoodCard";
import Shimmer from "../components/Shimmer.js";
import Slider from "../components/Slider";
import SearchInput from "../components/SearchInput";

// Other config imports
import { restrautList, URL } from "../config.js";
import "../theme/CommonStyle.css";

// Icon imports
import { FaStar } from "react-icons/fa";
import Header from "../components/Header";

// Component Body
const LandingScreen = () => {
	// Init states
	const [searchText, setSearchText] = useState("");
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [error, setError] = useState("");

	// will get called only once
	useEffect(() => {
		getRestaurantData();
	}, []);

	const getRestaurantData = async () => {
		try {
			//get data
			const res = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3667854&lng=77.06939799999999&page_type=DESKTOP_WEB_LISTING"
			);

			// convert json to readable object
			const json = await res.json();

			const list = json.data?.cards[2]?.data?.data?.cards;

			// update  local state
			setAllRestaurants(list);
			setFilteredRestaurants(list);
		} catch (error) {
			setError("something went wrong");
		}
	};

	// Get filtered list on basis of user search
	function searchHandler(searchText, restaurants) {
		return restaurants.filter((restaurant) =>
			restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
		);
	}

	return (
		<>
			<SearchInput
				searchText={searchText}
				placeholder="Search for restaurants amd food.."
				type="text"
				value={searchText}
				onChange={(e) => {
					// update the search enteree by user
					setSearchText(e.target.value);

					// get filtered data
					const data = searchHandler(searchText, allRestaurants);

					// update local state with filtered values
					setFilteredRestaurants(data);
				}}
			/>

			{/* slider component */}

			<Slider />
			<div className="m_t_24 p_h_16">
				<h2>total restaurant: {allRestaurants.length}</h2>
				<div style={{ border: "0.2px solid #b6b6b6", marginTop: "20px" }}></div>
			</div>
			{error}

			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{filteredRestaurants.length === 0 ? (
					<Shimmer />
				) : (
					filteredRestaurants.map((restaurant, index) => {
						// console.log("here", restaurant.data.id);
						return (
							<Link
								to={"/restaurant/" + restaurant.data.id}
								key={restaurant?.data?.id}
								style={{
									listStyleType: "none",
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<FoodCard {...restaurant?.data} />
							</Link>
						);
					})
				)}
			</div>
		</>
	);
};

export default LandingScreen;
