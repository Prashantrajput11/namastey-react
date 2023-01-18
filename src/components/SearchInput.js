import React from "react";

const SearchInput = ({
	placeholder,
	type,
	value,
	onChange,
	searchText,
	setSearchText,
}) => {
	return (
		<div
			style={{
				border: "1px solid orange",
				width: "345px",
				margin: "0 auto",
				marginBottom: "16px",
				outline: "none",
			}}
		>
			<input
				style={{ outline: "none" }}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchInput;
