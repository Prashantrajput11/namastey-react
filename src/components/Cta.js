import React from "react";
import { useDispatch } from "react-redux";
import {
	incrementQuantity,
	decrementQuantity,
} from "../features/cart/cartSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cta = ({ item }) => {
	const dispatch = useDispatch();
	// console.log({ itemQuantity });
	return (
		<div className="flex border-2 border-slate-300 w-16 justify-around items-center">
			<button
				onClick={() => {
					dispatch(decrementQuantity(item));
					toast.info("Item Quantity Updated!", {
						position: "bottom-left",
						autoClose: 1000,
					});
				}}
				className="text-xl"
			>
				-
			</button>
			<p className="text-green-700 font-bold">{item.itemQuantity}</p>
			<button
				className="hover:scale-110 delay-100 transition-all "
				onClick={() => {
					dispatch(incrementQuantity(item));
					toast.info("Item Quantity Updated!", {
						position: "bottom-left",
						autoClose: 1000,
					});
				}}
			>
				+
			</button>

			<ToastContainer />
			{/* Same as */}
			<ToastContainer />
		</div>
	);
};

export default Cta;
