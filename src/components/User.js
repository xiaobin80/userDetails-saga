import React, { Component } from 'react';

class User extends Component {
	constructor(props) {
		super();
	}
	
	render() {
		return (
			<tr>
				<td>{this.props.user.userId}</td>
				<td>{this.props.user.userName}</td>
				<td>{this.props.user.name}</td>
				<td>{this.props.user.email}</td>
				<td>{this.props.user.address}</td>
			</tr>
		);
	}
}

export default User;