import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CartFallback = ({
	text,
	subText,
	imageSource,
	height,
	width,
	textWeight,
	textWidth,
	ctaText,
}) => {
	return (
		<div className="flex flex-col justify-center items-center ">
			<img src={imageSource} alt="" srcset="" style={{ height, width }} />
			<h2 className={(textWeight, "px-14 pt-8")}>{text}</h2>
			<p className="my-4">{subText} </p>
			{ctaText && (
				<NavLink to="/">
					<button className="bg-amber-500 px-4 py-2 text-white hover:drop-shadow-lg backdrop-blur">
						{ctaText}
					</button>
				</NavLink>
			)}
		</div>
	);
};

export default CartFallback;
