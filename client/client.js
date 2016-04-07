import React from 'react'  //var react = require('react')
import { render } from 'react-dom'
import App from '../components/App.js'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState  = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo'
	}],
	user: {
		username: 'thomas',
		id: 9
	}
}

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
	);
