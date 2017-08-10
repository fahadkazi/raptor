// ../modules/Navigation.js

import React from 'react'
import axios from 'axios'
import { SEARCH_MOVIES } from '../config/const'
import { Link } from 'react-router'
import { searchMovie } from '../actions/searchActions'

export default React.createClass({
  handleKeyPress(event) {
	  if(event.key == 'Enter'){
			axios.get(SEARCH_MOVIES + '&query=abc')
			.then(response => { console.log('search', response); })
			.catch(error => { dispatch({type: "FETCH_SEARCH_ERROR", error: error}) })
	    // this.props.dispatch(searchMovie());
	  }
	},
  render() {
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
				      <input className="mdl-textfield__input" type="text" id="search-expandable" onKeyPress={this.handleKeyPress} />
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
});