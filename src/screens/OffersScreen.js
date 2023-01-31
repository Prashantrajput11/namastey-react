import React, { useState, useEffect } from "react";
import CouponCard from "../components/CouponCard";
import "../theme/CommonStyle.css";
import { URL } from "../config";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tab from "../components/Tab";

const OffersScreen = () => {
	const [offers, setOffers] = useState(null);
	const [copy, setCopy] = useState({ text: "", isCopied: false });

	let tab_list_options = [
		{ tagName: "Restaurant", id: "01" },
		{ tagName: "offer", id: "02" },
	];
	useEffect(() => {
		getOffersList();
	}, []);

	const getOffersList = async () => {
		let response = await fetch(
			"https://www.swiggy.com/dapi/offers/payment?lat=28.3667854&lng=77.06939799999999&offset=0"
		);

		let json = await response.json();

		setOffers(json.data.cards);

		console.log(json.data.cards);
	};

	return (
		<div className="restaurantOffersContainer">
			<div className="restaurantOffersHeader">
				<div>
					<h2 className="color_light fw_medium font_size_xxxl">
						Offers For you
					</h2>
					<p
						className="color_light font_size_3xl fw_thin"
						style={{ lineHeight: 1.2, opacity: 0.8, fontWeight: "thin" }}
					>
						Explore top deals and offers exclusively for you!
					</p>
				</div>
				<img
					src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
					alt=""
					style={{ height: "200px", width: "200px" }}
				/>
			</div>

			<div class="border-b-2 border-slate-100	">
				<Tab tabOptions={tab_list_options} />
			</div>

			<div className="couponCardContainer">
				{offers !== null &&
					Object.values(offers).map((offer) =>
						offer.data.data.couponCode ? (
							<div className="couponCardBody">
								{
									<>
										<CouponCard
											couponCodeText={offer?.data?.data?.couponCode}
											logo={URL + offer?.data?.data?.logo}
											couponCodeTagColor={"#fffae6"}
											couponCodeDescription={offer?.data?.data?.description}
										/>
										{/* <CopyToClipboard
											text={copy.text}
											onCopy={() =>
												setCopy({
													isCopied: true,
												})
											}
										> */}
										<button className="outlineCta">
											<p style={{ color: "#e67e22" }}>
												{copy.isCopied ? "Copied" : "Copy Code"}{" "}
											</p>
										</button>
										{/* </CopyToClipboard> */}
									</>
								}
							</div>
						) : null
					)}
			</div>
		</div>
	);
};

export default OffersScreen;
