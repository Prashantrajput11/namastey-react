import { FaUserAlt } from "react-icons/fa";

// CiDiscount1;
import "../theme/CommonStyle.css";
import Drawer from "./Drawer";

const IconWithRightLabel = ({
	icon,
	text,
	textColor,
	style,
	width,
	height,
	isDrawerOpen,
	onClick,
}) => {
	return (
		<div className="flex justify-space-between a_i_center" onClick={onClick}>
			<div>{icon}</div>
			<p style={{ color: textColor, marginLeft: "8px" }}>{text} </p>
		</div>
	);
};

export default IconWithRightLabel;
