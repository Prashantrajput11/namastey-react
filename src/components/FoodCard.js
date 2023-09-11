import React from "react";

import { FaStar } from "react-icons/fa";

import { restrautList, URL } from "../config.js";

export default function FoodCard(props) {
	const { resData } = props;
	const {
		cloudinaryImageId,
		name,
		avgRating,
		cuisines,
		costForTwo,
		deliveryTime,
	} = resData;
	return (
		<div className=" w-72 m-2 p-2 hover:scale-110 delay-400 transition-all">
			<img src={URL + cloudinaryImageId} className="foodImage" />

			<div className="py-2">
				<p className="font-semibold">{name}</p>
				{/* <p className="font-thin text-xs">{cuisines.join(", ")}</p> */}
			</div>

			<div className="flex items-center ">
				<div
					className=" bg-emerald-300 flex   items-center justify-center text-white py-1 px-1 font-bold text-xs"
					style={{ backgroundColor: "#48c479" }}
				>
					<FaStar color="white" />
					<span className="ml-2">{avgRating}</span>
				</div>
				<p className="ml-2 mr-2">-</p>
				<p className="font-thin text-xs">{deliveryTime + "minutes"}</p>
				<p className="ml-2 mr-2 ">-</p>
				<p className="font-thin text-xs">{costForTwo}</p>
			</div>

			<div
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#bdc3c7",
					marginTop: 16,
				}}
			></div>
			<div className="addCtaContainer"></div>
		</div>
	);
}
