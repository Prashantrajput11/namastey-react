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

// Redux toolkit imports
import { addItemToCart, addRestaurants } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// Third party librarires
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cta from "../components/Cta";
import FoodType from "../components/FoodType";

// Custom Hooks imports
import useItemTotal from "../utils/hooks/useItemTotal";
import CartFallback from "../components/CartFallback";

// RestaurantMenuScreen
const RestaurantMenuScreen = () => {
	// get cart item from redux store
	const cartItems = useSelector((store) => store.cart.items);

	// get total price for cart items
	const getItemTotal = useItemTotal();

	// extract restaurant id
	const { id } = useParams();

	const restaurant = useRestaurant(id);

	const dispatch = useDispatch();

	const handleAdd = (item) => {
		dispatch(addItemToCart(item));
	};

	// Get unique meal categories
	function getUniqueMealCategories() {
		let showUniqueCategories = [];

		let array = Object.values(restaurant?.menu.items);

		array.map((item, restaurant) => {
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
												<button
													className="addCtaCart"
													onClick={() => {
														handleAdd(item);
														toast("Item added to cart!", {
															position: "top-right",
															autoClose: 1000,
															hideProgressBar: false,
															closeOnClick: true,
															pauseOnHover: true,
															draggable: true,
															progress: undefined,
															theme: "light",
														});
													}}
												>
													Add
												</button>
											</div>
										</div>

										<div className="horizontalSeparator"></div>
									</>
								))}
							</p>
						</div>
					</div>
					{cartItems.length > 0 ? (
						<div className="cartDetailsContainer border-green-400 border">
							<h2 className="font-bold text-2xl">Cart </h2>
							<p>{cartItems.length} item</p>

							{cartItems.map((item) => {
								return (
									<div className="">
										<div className="flex items-center mt-2 justify-between">
											{item.isVeg ? (
												<img
													src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
													style={{
														height: "20px",
														width: "20px",
														marginRight: "8px",
													}}
												/>
											) : (
												<img
													src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png
														"
													style={{
														height: "20px",
														width: "20px",
														marginRight: "8px",
													}}
												/>
											)}

											<p className=" w-36 text-sm">{item.name}</p>
											<div className="px-5">
												<Cta item={item} />
											</div>

											<p className="font-thin text-sm">
												{"₹ " + (item.price / 100) * item.itemQuantity}
											</p>
										</div>
									</div>
								);
							})}
							<div className="flex justify-between mt-4">
								<p className="text-sm text-gray-500 ">Sub Total</p>
								{"₹ " + getItemTotal()}
							</div>
						</div>
					) : (
						<div>
							<CartFallback
								imageSource={
									"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
								}
								height={200}
								width={200}
								text={
									"Good food is always cooking! Go ahead, order some yummy items from the menu."
								}
								textWeight={"font-light"}

								// textWidth = {}
							/>
						</div>
					)}

					<ToastContainer />
					{/* Same as */}
					<ToastContainer />
				</div>
			</>
		)
	);
};

export default RestaurantMenuScreen;
