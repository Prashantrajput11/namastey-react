import React from "react";
import { TiTick } from "react-icons/ti";

const PaymentSuccessfullScreen = () => {
	return (
		<div className="bg-green-500 h-28 mx-40 mt-30 flex flex-col justify-center items-center py-20">
			<div
				style={{
					height: 50,
					width: 50,
					background: "white",
					borderRadius: "50%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TiTick color="green" style={{ height: 40, width: 40 }} />
			</div>
			<h2 className="mt-6">Payment Successfull</h2>
			<p>Transaction Number: 464564564</p>
		</div>
	);
};

export default PaymentSuccessfullScreen;
