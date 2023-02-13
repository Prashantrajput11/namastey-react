// React imports
import React, { useState, useEffect } from "react";
import CouponCard from "../components/CouponCard";

// Style imports
import "../theme/CommonStyle.css";

// Config imports
import { URL } from "../config";

// External libraries imports
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tab from "../components/Tab";
import useOffers from "../utils/hooks/useOffers";

const OffersScreen = () => {
	const [copy, setCopy] = useState({ text: "", isCopied: false });

	// Get offers list
	const offers = useOffers();

	// return
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
