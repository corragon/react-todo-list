import React, { Component } from 'react'

class TextDisplay extends Component {

	constructor(props, context){
		super(props, context)
	}

	handleClick() {
		this.props.deleteLetter()
	}

	render() {
		return (
			<div>
				<div>I'm displaying text: {this.props.text}</div>
				<button onClick={this.handleClick.bind(this)}>delete one letter</button>
			</div>
		)
	}
}

export default TextDisplay