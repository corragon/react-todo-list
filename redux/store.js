import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
	applyMiddleware(logger())
	)(createStore)

export default function configureStore(initialState = {todos:[]}) {
	return createStore(reducer, initialState);
}