import React from "react";
import { useSelector } from "react-redux";
import AddressCard from "../components/AddressCard";

import { USERS_ADDRESS_LIST } from "../config";
import { URL } from "../config";

import { NavLink, useParams } from "react-router-dom";

import useRestaurant from "../utils/hooks/useRestaurant";
import RestaurantMenuScreen from "./RestaurantMenuScreen";
import Cta from "../components/Cta";
import CartFallback from "../components/CartFallback";
import CheckboxCta from "../components/CheckboxCta";
import useItemTotal from "../utils/hooks/useItemTotal";

const CartScreen = () => {
	const cartItems = useSelector((store) => store.cart.items);

	const getItemTotal = useItemTotal();

	return cartItems.length > 0 ? (
		<>
			<div className="flex mt-5 mx-6  p-20  justify-between">
				<div className="" style={{ width: 770 }}>
					<h2>Choose a delivery address</h2>
					<div className="bg-white drop-shadow-md p-7 flex  flex-wrap mr-5">
						{USERS_ADDRESS_LIST.map((user_address) => {
							return (
								<div className=" ">
									<AddressCard {...user_address} ctaText="Deliver Here" />
								</div>
							);
						})}
					</div>
				</div>

				<div className="bg-white drop-shadow-md w-40 flex-2 p-6 w-auto">
					cart details
					{cartItems.map((item) => {
						return (
							<div className="">
								<div>
									{/* <img
									src={URL + item.cloudinaryImageId}
									alt="food item image"
									srcset=""
									className=" h-9"
								/> */}
								</div>
								<div className="flex items-center mt-2">
									<p className="px-2 w-36 text-sm">{item.name}</p>
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
					<div className="border-slate-400 border mt-4  flex p-4 w-80">
						<CheckboxCta />
						<div>
							<p className="font-medium text-sm ml-4">
								Opt in for No-contact Delivery
							</p>

							<p className="font-thin text-sm ml-4">
								Unwell, or avoiding contact? Please select no-contact delivery.
								Partner will safely place the order outside your door (not for
								COD)
							</p>
						</div>
					</div>
					<div>
						<h3 className="mt-4">Bill Details</h3>
						<div className="flex justify-between">
							<p className="text-sm text-gray-500 ">Item Total</p>
							{Number(getItemTotal()) + 45}
						</div>
						<div className="border border-gray-200 my-2"></div>
						<div className="flex justify-between">
							<p className="text-green-600 text-sm">Item Discount</p>
							<p className="text-green-600 text-sm">{"₹ " + -45}</p>
						</div>
					</div>
					<div className="border border-black my-2"></div>
					<div className="flex justify-between">
						<p className="font-bold text-sm">To Pay</p>
						<p className="font-bold  text-sm">{"₹ " + getItemTotal()}</p>
					</div>
				</div>
			</div>
			<NavLink to="/payment">
				<button className="ml-40 bg-amber-500 hover:bg-amber-400 px-4 py-2">
					Proceed to pay
				</button>
			</NavLink>
		</>
	) : (
		<div style={{ margin: "0 auto" }}>
			<CartFallback
				imageSource={
					"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
				}
				height={200}
				width={200}
				text={"Your cart is empty"}
				textWeight={"font-bold"}
				ctaText={"SEE RESTAURANTS NEAR YOU"}
			/>
		</div>
	);
};

export default CartScreen;
