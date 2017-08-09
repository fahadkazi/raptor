import React from 'react'
import ReactDOM from 'react-dom'
import MovieListing from './modules/movielisting'
import favorites from './modules/favorites'
import { Provider } from 'react-redux'
import store from './modules/store'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={MovieListing}/>
			<Route path="/favorites" component={favorites}/>
		</Router>
	</Provider>
), document.getElementById('app'));