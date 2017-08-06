import React from 'react'
import ReactDOM from 'react-dom'
import MovieListing from './modules/movielisting'
import { Provider } from 'react-redux'
import store from './modules/store'

ReactDOM.render((
	<Provider store={store}>
		<MovieListing />
	</Provider>
), document.getElementById('app'));