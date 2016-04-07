import React, { Component } from 'react'

class TodoItem extends Component {

	handleComplete(event) {
		this.props.actions.completeTodo(this.props.todo.id)
	}
	handleDelete(event) {
		this.props.actions.deleteTodo(this.props.todo.id)
	}

	render() {
		return (
			<li>
				<div>{this.props.todo.text}</div>
				<button onClick={this.handleComplete.bind(this)}>Mark Done</button>
				<button onClick={this.handleDelete.bind(this)}>Delete</button>
			</li>
		)
	}
}

export default TodoItem