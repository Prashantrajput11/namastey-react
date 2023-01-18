// React Imports
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//Icons Import
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import IconWithRightLabel from "./IconWithRightLabel";

// other config imports

// Component Header
const Header = () => {
	// init local state
	const [showDrawer, setShowDrawer] = useState(false);

	// active style for header
	let activeStyle = {
		color: "#e67e22",
	};

	// return
	return (
		<div className="header">
			<Title />;
			<ul>
				<li>
					<NavLink
						to="/offers"
						style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						<IconWithRightLabel
							text="Offers"
							icon={<TbDiscount2 style={{ height: "24px", width: "24px" }} />}
						/>
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/help"
						style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						<IconWithRightLabel
							text="Help"
							icon={
								<IoHelpCircleOutline
									style={{ height: "22px", width: "22px" }}
								/>
							}
						/>
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/sign"
						style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						<IconWithRightLabel
							isDrawerOpen={showDrawer}
							onClick={() => setShowDrawer(!showDrawer)}
							text="Sign In"
							icon={<FiUser style={{ height: "24px", width: "24px" }} />}
						/>
					</NavLink>
				</li>

				<li>
					<IconWithRightLabel
						text="Cart"
						icon={
							<HiOutlineShoppingCart
								style={{ height: "24px", width: "24px" }}
							/>
						}
					/>
				</li>
			</ul>
		</div>
	);
};

const Title = () => {
	return (
		<h1>
			<NavLink to="/">
				<span style={{ color: " #2c3e50" }}>
					Food<span style={{ color: "#e67e22" }}>OOSH</span>
				</span>
			</NavLink>
		</h1>
	);
};

export default Header;
