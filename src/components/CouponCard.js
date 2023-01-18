import React from "react";
import "../theme/CommonStyle.css";

import { URL } from "../config";

const CouponCard = ({
	couponCodeText,
	couponCodeDescription,
	couponCodeTagColor,
	logo,
}) => {
	console.log(logo);
	return (
		<div>
			<div
				style={{
					background: couponCodeTagColor,
					border: "0.6px solid #daceb7",
					fontSize: "16px",
					padding: "8px 12px",
					marginBottom: "8px",
					display: "flex",
					justifyContent: "space-between",
					width: "200px",
				}}
			>
				<img src={logo} style={{ height: "20px", width: "20px" }} />
				<h2 className="font_size_xl">{couponCodeText}</h2>
			</div>

			<p className="m_b_6">{couponCodeDescription}</p>
		</div>
	);
};

export default CouponCard;
