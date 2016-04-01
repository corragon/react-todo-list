import React, { Component } from 'react'

class TextDisplay extends Component {

	constructor(props, context){
		super(props, context)
	}

	render() {
		return <div>I'm displaying text: {this.props.text}</div>
	}
}

export default TextDisplay