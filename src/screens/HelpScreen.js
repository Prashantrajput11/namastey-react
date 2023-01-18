import React from "react";
import Accordion from "../components/aCCORDION.JS";

const HelpScreen = () => {
	let FAQ = [
		{
			id: "01",
			question: "I want to partner my restaurant with Swiggy",
		},
		{
			id: "02",
			question:
				"What are the mandatory documents needed to list my restaurant on Swiggy?",
		},
		{
			id: "03",
			question: "Qustion3",
		},
		{
			id: "04",
			question: "Qustion4",
		},
		{
			id: "05",
			question: "Qustion5",
		},
		{
			id: "06",
			question: "Qustion6",
		},
		{
			id: "07",
			question: "Qustion7",
		},
	];
	return (
		<div className="helpScreenContainer">
			<div>
				<h2 className="color_light">Help and Support</h2>
				<p className="color_light">
					Let's take a step ahead and help you better
				</p>
			</div>

			<div className="accordionContainer">
				{FAQ.map((accordion) => {
					return <Accordion text={accordion.question} />;
				})}
			</div>
		</div>
	);
};

export default HelpScreen;
