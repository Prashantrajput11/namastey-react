import React from "react";

import supabase from "../config";

import { useNavigate } from "react-router-dom";

const SignInScreen = () => {
	console.log({ supabase });

	// Sign in user
	supabase.auth.onAuthStateChange(async (event) => {
		event !== "SIGNED_OUT" ? useNavigate("/") : useNavigate("/sign");
	});

	async function signInWithGoogle() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "google",
		});
	}

	return (
		<div className="w-fit mx-auto my-60 bg-neutral-100  px-4 py-2 flex item-center justify-center hover:bg-neutral-400 transition all">
			<img
				src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
				alt=""
				srcset=""
				className="h-6 mr-2"
			/>
			<button onClick={() => signInWithGoogle()}>login with Google</button>
		</div>
	);
};

export default SignInScreen;
