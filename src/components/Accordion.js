import React, { useState } from "react";
import "./style.css";

import { IoIosArrowDown } from "react-icons/io";
import IconWithRightLabel from "./IconWithRightLabel";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const Accordion = ({ text }) => {
	// console.log("faq", question);
	const [showAnswer, setShowAnswer] = useState(false);
	return (
		<div
			style={{
				borderBottom: "1px solid #d4d5d9",
				paddingBottom: "20px",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					margin: "10px 0",
				}}
			>
				<p style={{ color: "black", fontFamily: "sans-serif" }}>{text}</p>

				<button
					onClick={() => setShowAnswer(!showAnswer)}
					style={{ border: "none", padding: "6px" }}
				>
					{showAnswer ? <AiFillCaretUp /> : <AiFillCaretDown />}
				</button>
			</div>

			<p style={{ color: "black" }}>{showAnswer && "test accordions"}</p>
		</div>
	);
};

export default Accordion;
