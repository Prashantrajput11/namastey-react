import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import supabase from "../../config";

const useGetUser = () => {
	// Init state
	const [user, setUser] = useState({});

	const navigate = useNavigate();
	useEffect(() => {
		async function getUserData() {
			await supabase.auth.getUser().then((value) => {
				value?.data?.user && setUser(value.data.user);
			});
		}
		getUserData();
	}, []);
	console.log("user", user);

	async function signOutUser() {
		const { error } = await supabase.auth.signOut();
		navigate("/sign");
		setUser({});
		console.log("after sign out", user);
	}

	async function deleteUser() {
		const { error } = await supabase.auth.api.deleteUser(user?.id);
		navigate("/sign");
		setUser({});
	}

	return { user, signOutUser, deleteUser };
};

export default useGetUser;
