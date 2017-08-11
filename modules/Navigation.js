// ../modules/Navigation.js

import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { SEARCH_MOVIES } from '../config/const'
import { Link } from 'react-router'
import { searchMovie } from '../actions/searchActions'

class Navigation extends React.Component{
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		if (event.key === 'Enter') {
			this.props.dispatch(searchMovie(event.target.value))
		}
		// alert('fsfdsdf');
	}
	render() {
		const { query } = this.props
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			  <header className="mdl-layout__header">
			    <div className="mdl-layout__header-row">
			      <span className="mdl-layout-title header-title">BMS</span>
			      <div className="mdl-layout-spacer"></div>
			      <nav className="mdl-navigation mdl-layout--large-screen-only">
			      	<Link className="mdl-navigation__link" to='/favorites'>Favorites</Link>
			      </nav>
				  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
				    <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-expandable">
				      <i className="material-icons">search</i>
				    </label>
				    <div className="mdl-textfield__expandable-holder">
				      <input className="mdl-textfield__input" type="text" id="search-expandable" value={query} onKeyPress={this.handleChange} />
				      <label className="mdl-textfield__label" htmlFor="search-expandable">Search text</label>
				    </div>
				  </div>
			    </div>
			  </header>
			  <div className="mdl-layout__drawer">
			    <span className="mdl-layout-title">BMS</span>
			    <nav className="mdl-navigation">
			      	<Link className="mdl-navigation__link" to='/favorites'>Favorites</Link>
			    </nav>
			  </div>
			  {this.props.children || <movielisting />}
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('stttt', state);
  	return {
    	movies: state.popular.data,
       config: state.config.data.images,
       favorite: state.favorite.data
  	}
}

export default connect(mapStateToProps)(Navigation)