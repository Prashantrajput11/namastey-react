import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
	const items = useSelector((state) => state.cart);
	return (
		<div className="header">
			<Title />;
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>About Us</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<li>
					<p>Cart items: {items.length}</p>
				</li>
			</ul>
		</div>
	);
};

const Title = () => {
	return <h1>Food Villa</h1>;
};

export default Header;
