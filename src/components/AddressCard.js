import React from "react";

const AddressCard = ({
	addressType,
	addressDescription,
	deliveryTime,
	ctaText,
}) => {
	return (
		<div className=" shadow-slate-700 border-2 border-slate-300 mr-4 w-60 mt-3 p-3 hover:scale-105 delay-400 transition-all">
			<h2 className="font-bold">{addressType}</h2>
			<p>{addressDescription}</p>
			<p>{deliveryTime}</p>
			<button className="bg-green-500 px-3 py-1 text-white mt-1 text-sm">
				{ctaText}
			</button>
		</div>
	);
};

export default AddressCard;
