import React, { useState } from "react";

const Tab = ({ tabOptions }) => {
	console.log(tabOptions);
	const [selectedOption, setSelectedOption] = useState(tabOptions[0]);
	const [isSelected, setIsSelected] = useState(selectedOption);

	console.log("selectedOption", selectedOption);

	function tabHandler(option) {
		// console.log("id", id);
		setSelectedOption(option);
		// setIsSelected(!isSelected);
	}

	return (
		<div class="flex p-4  ">
			{tabOptions.map((option) => (
				<p
					class="cursor-pointer"
					onClick={() => {
						tabHandler(option.id);
						// setSelectedOptionBgColor(option.id);
					}}
					style={
						selectedOption.id === option.id ? { backgroundColor: "red" } : null
					}
				>
					{option.tagName}
				</p>
			))}
		</div>
	);
};

export default Tab;
