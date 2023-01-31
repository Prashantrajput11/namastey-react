import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useOnline = () => {
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		// check if user is online
		const handleOnline = () => {
			setIsOnline(true);
		};

		// check if user is offline
		const handleOffline = () => {
			setIsOnline(false);
		};

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		// clean the effect
		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("online", handleOffline);
		};
	}, []);

	return isOnline; // returns either true or false
};

export default useOnline;
