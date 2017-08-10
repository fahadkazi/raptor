import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './modules/Navigation'
import MovieListing from './modules/movielisting'
import favorites from './modules/favorites'
import { Provider } from 'react-redux'
import store from './modules/store'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Navigation}>
				<IndexRoute component={MovieListing}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById('app'));