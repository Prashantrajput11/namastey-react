import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { FaUserAlt } from "react-icons/fa";

// const heading = React.createElement(
//   'div', {},
//   React.createElement(
//     'h1', {}, React.createElement('p', {id: 'title'}, 'this is react')
//     )
//   )
// console.log({heading});

const Header = () => {
	const [text, setText] = useState("");
	return (
		<div className="header">
			<LeftContent />
			<input type="text" placeholder="search..." value={text}></input>
			<RightContent />
		</div>
	);
};

const LeftContent = () => {
	return <h1>BQ</h1>;
};
const RightContent = () => {
	return (
		<FaUserAlt
			className="icon-container"
			style={{ height: "24px", width: "24px" }}
		/>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
