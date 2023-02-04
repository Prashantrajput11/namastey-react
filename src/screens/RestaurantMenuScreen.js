// React imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Styles
import "./style.css";
import "../theme/CommonStyle.css";

// Config imorts
import { URL } from "../config";
import IconWithRightLabel from "../components/IconWithRightLabel";

// Icons imports
import { FaStar } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import useRestaurant from "../utils/hooks/useRestaurant";

// RestaurantMenuScreen
const RestaurantMenuScreen = () => {
	// extract restaurant id
	const { id } = useParams();

	const restaurant = useRestaurant(id);

	// Get unique meal categories
	function getUniqueMealCategories() {
		let showUniqueCategories = [];

		let array = Object.values(restaurant?.menu.items);

		array.map((item) => {
			showUniqueCategories.indexOf(item.category) === -1 &&
				showUniqueCategories.push(item.category);
		});

		return showUniqueCategories;
	}

	//return
	return (
		restaurant != null && (
			<>
				<div className="restaurantDetailscontainer">
					<div>
						<img
							src={URL + restaurant.cloudinaryImageId}
							className="restaurantDetailsImage"
						/>
					</div>

					<div className="restaurantDetails">
						<h2 className="color_light fw_thin font_size_8xl">
							{restaurant.name}
						</h2>
						<p className="m_t_16 m_b_16 color_light_secondary">
							{restaurant.cuisines.join(", ")}
						</p>
						<p className="color_light_secondary font_size_large">
							{restaurant.locality + ", " + restaurant.area}
						</p>

						<div className="restaurantDetailsFooter">
							<div>
								<IconWithRightLabel
									text={restaurant.avgRating}
									textColor="#ffffff"
									icon={<FaStar color="#ffffff" />}
								/>
								<p className="color_light_secondary m_t_6 font_size_small">
									{restaurant.totalRatingsString}
								</p>
							</div>

							<div className="verticalSeparator"></div>
							<div>
								<p className="color_light">{restaurant.sla.slaString}</p>
								<p className="color_light_secondary font_size_small m_t_6 fw_thin">
									Delivery Time
								</p>
							</div>

							<div className="verticalSeparator"></div>

							<div>
								<p className="color_light">
									{"₹ " + restaurant.costForTwo / 100}
								</p>
								<p className="color_light_secondary font_size_small m_t_6 fw_thin">
									{restaurant.costForTwoMsg}
								</p>
							</div>
						</div>
					</div>

					<div className="restaurantDetailsOfferContainer">
						<IconWithRightLabel
							icon={
								<TbDiscount2
									color={"white"}
									style={{ height: "22px", width: "22px" }}
								/>
							}
							textColor="#ffffff"
							text={restaurant.aggregatedDiscountInfo.descriptionList[0].meta}
						/>

						<div className="m_t_16">
							<IconWithRightLabel
								icon={
									<TbDiscount2
										color={"white"}
										style={{ height: "22px", width: "22px" }}
									/>
								}
								textColor="#ffffff"
								text={restaurant.aggregatedDiscountInfo.descriptionList[1].meta}
							/>
						</div>
					</div>
				</div>
				<div className="recommendedSectionContainer">
					<div className="recommendedListContainer">
						{/* <li>{getUniqueCategories()}</li> */}
						<p>All Day breakfast</p>
						<p>Winter Speacial</p>
						<p>Pickle Mania</p>
						<p>Bakery Snakes</p>
						<p>Chaat</p>
						<p>Channa Bhatura</p>
						<p>Kulcha</p>
						<p>chowmein</p>
					</div>

					<div className="recommendedItemsContainer">
						<div className="recommendedItemsHeader">
							<h2 className="font_size_xl">Recommended</h2>
							<p className="font_size_small color_light_secondary_dark">
								{Object.values(restaurant?.menu.items).length} ITEMS
							</p>
						</div>

						<div
							style={{
								display: "flex",
								// justifyContent: "space-between",
								flex: 1,
							}}
						>
							<p>
								{Object.values(restaurant?.menu.items).map((item) => (
									<>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												border: "1px solid green;",
												width: "500px",
											}}
										>
											<div>
												{item.isVeg ? (
													<img
														src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
														style={{ height: "20px", width: "20px" }}
													/>
												) : (
													<img
														src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png
														"
														style={{ height: "20px", width: "20px" }}
													/>
												)}

												<p className="fw_medium font_size_xl">{item.name}</p>
												<p className="fw_medium font_size_regular">
													{"₹ " + item.price / 100}
												</p>

												<p className="itemDescription">
													{item.description ? item.description : "--"}
												</p>
											</div>

											<div className="recommendedItemImageContainer">
												<img src={URL + item.cloudinaryImageId} />
												<button className="addCtaCart">Add</button>
											</div>
										</div>

										<div className="horizontalSeparator"></div>
									</>
								))}
							</p>
						</div>
					</div>

					<div className="cartDetailsContainer">
						<h2>Cart here</h2>
						<div className="m_t_4 m_b_4 ">
							<li style={{ listStyle: "none" }}>
								from
								<a
									href="#"
									style={{ textDecoration: "none", color: "#2980b9" }}
								>
									Om Sweets And Snacks
								</a>
							</li>
						</div>

						<p className="color_light_secondary_dark fw_medium font_size_regular">
							3 ITEMS
						</p>

						<div className="subTotalContainer">
							<div>
								<h2 className="font_size_xl m_b_8">SubTotal</h2>
								<p className="color_light_secondary_dark">
									Extra Charges May apply
								</p>
							</div>

							<p>Rs.244</p>
						</div>
						<div className="checkoutCta">
							<li>
								<a href="#">Checkout</a>
							</li>
						</div>
					</div>
				</div>
			</>
		)
	);
};

export default RestaurantMenuScreen;
