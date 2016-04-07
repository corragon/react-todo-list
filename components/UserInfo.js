import React, { Component } from 'react'

class UserInfo extends Component {

	handleNewId() {
		this.props.actions.createNewUserId()
	}
	handleNewIdIfOdd() {
		this.props.actions.createNewUserIdIfOdd()
	}
	handleNewIdAsync() {
		this.props.actions.createNewUserIdAsync()
	}

	render() {
		return (
			<li>
				<div>username: {this.props.user.username}</div>
				<div>id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Random id</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>Random id if odd</button>
				<button onClick={this.handleNewIdAsync.bind(this)}>Random async</button>
			</li>
		)
	}
}

export default UserInfo