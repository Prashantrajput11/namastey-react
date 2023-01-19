import React from "react";

export default function Shimmer({ length }) {
	console.log(length);
	return (
		<div style={{ display: "flex", flexWrap: "wrap", paddingRight: "10px" }}>
			{Array(15)
				.fill("")
				.map(() => (
					<div className="shimmer-container">
						<img className="shimmer-image" />
						<p className="shimmer-card-heading"></p>
						<p className="shimmer-card-restaurant-name"></p>
					</div>

					// "svgo": "^2.4.0"
				))}
		</div>
	);
}
