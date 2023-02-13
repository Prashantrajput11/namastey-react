import { useState } from "react";
import "./style.css";

const Slider = () => {
	let [index, setIndex] = useState(0);
	const slider_images = [
		"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep",
		" https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
		"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym",
		"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
		"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v",
	];
	return (
		<div className="sliderContainer">
			{slider_images.map(
				(image, index) =>
					index !== slider_images.length - 1 && (
						<img
							src={image}
							height={"260px"}
							width={"260px"}
							// className="m_l_24"
						/>
					)
			)}
		</div>
	);
};
export default Slider;
