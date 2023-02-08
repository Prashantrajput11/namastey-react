import React, { useState, useEffect } from "react";

const useOffers = () => {
	// Init local state
	const [offers, setOffers] = useState(null);

	// Get offers list
	useEffect(() => {
		getOffersList();
	}, []);

	const getOffersList = async () => {
		let response = await fetch(
			"https://www.swiggy.com/dapi/offers/payment?lat=28.3667854&lng=77.06939799999999&offset=0"
		);

		let json = await response.json();

		setOffers(json.data.cards);
	};

	return offers;
};

export default useOffers;
