import React, { Component } from 'react'

class TodoInput extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			inputText: ''
		}
	}

	handleChange(event) {
		this.setState({
			inputText: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('submit clicked');
		this.props.addTodo(this.state.inputText)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)} >
				<input 	
					type="text" 
					placeholder="Type in your todo"
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
					/>
					<input type='submit' />
				</form>
			</div>
		)
	}
}

export default TodoInput