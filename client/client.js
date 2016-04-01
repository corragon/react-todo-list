import React from 'react'  //var react = require('react')
import { render } from 'react-dom'
import App from '../components/App.js'


render(
	// define the encompassing component
	// DOM element we want to mount at
	<App/>,
	document.getElementById('app')
	);
