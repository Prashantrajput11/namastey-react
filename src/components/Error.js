// React imports
import { useRouteError } from "react-router-dom";
import "../theme/CommonStyle.css";

const Error = () => {
	const error = useRouteError();

	console.log(error);
	return (
		<div className="error-container">
			<img src="https://media.istockphoto.com/id/1285416792/vector/empty-and-open-empty-fridge-vector-illustration-in-cartoon-style.jpg?s=170667a&w=0&k=20&c=k35sKyY9BllEUH632Nm9Eughq_os5DJAStP8uHjeD-I=" />

			<div>
				<p>
					Oops!! Nothin' in there But Please dont fret, we know you are hungry.
				</p>
				<p>So the correct address would be foodoosh.com</p>

				<button className="error-cta">Ughh ! get me some food</button>
			</div>
		</div>
	);
};
export default Error;
