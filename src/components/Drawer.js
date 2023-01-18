import React from "react";

const Drawer = ({ isDrawerOpen, onClick }) => {
	return (
		<div style={{ width: "400px", border: "1px solid green" }}>
			<input type="text" style={{ border: "1px solid red" }} />
			<button>Login</button>
		</div>
	);
};

export default Drawer;
