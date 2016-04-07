import React, { Component } from 'react'

class TodoList extends Component {

	// constructor(props, context) {
	// 	super(props, context)
	// 	this.state = {
	// 		inputText: ''
	// 	}
	// }

	render() {
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						return <li key={todo.id}>{todo.text}</li>
					})
				}
			</ul>
		)
	}
}

export default TodoList