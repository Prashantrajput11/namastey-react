"use strict";

import { Component } from "react";

class SignInScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	render() {
		return (
			<div>
				<h1>this is class component : {this.state.count}</h1>
				<button onClick={this.setState({ count: 1 })}></button>
			</div>
		);
	}
}

export default SignInScreen;
