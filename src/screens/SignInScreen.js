import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

import { useNavigate } from "react-router-dom";

// create supabase client
const supabase = createClient(
	"https://sttegpxaehowwtujtoov.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0dGVncHhhZWhvd3d0dWp0b292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyMzE0ODgsImV4cCI6MTk5MDgwNzQ4OH0.KHYUpqTc2_6MOTjP2PjbWSYtJvuLqeMr1Ptq2UwIwcM"
);
const SignInScreen = () => {
	supabase.auth.onAuthStateChange(async (event) => {
		event !== "SIGNED_OUT" ? useNavigate("/") : useNavigate("/sign");
	});
	// return (
	// 	<div className="max-h-max flex  justify-center flex-col m-auto border-yellow-400 border-2 w-fit p-10 ">
	// 		<div className="mb-4">
	// 			<h2 className="text-2xl font-extrabold font-serif">Login</h2>
	// 			<p>
	// 				or <span className="text-amber-500  ">create and account</span>
	// 			</p>
	// 		</div>

	// 		<div style={{}}>
	// 			<label>
	// 				Email:
	// 				<input
	// 					type="email"
	// 					name="email"
	// 					placeholder="mail@website.com"
	// 					className="border-yellow-400 shadow py-3 px-6"
	// 				/>
	// 			</label>
	// 		</div>

	// 		<div className="mt-6">
	// 			<label>
	// 				Password:
	// 				<input
	// 					type="password"
	// 					name="passowrd"
	// 					placeholder="Min. 8 character"
	// 					className="border-yellow-400 shadow py-3 px-6"
	// 				/>
	// 			</label>
	// 		</div>
	// 	</div>
	// );
	return (
		<div className="w-fit m-auto">
			<Auth
				supabaseClient={supabase}
				appearance={{ theme: ThemeSupa }}
				theme="dark"
				providers={["google"]}
			/>
		</div>
	);
};

export default SignInScreen;
