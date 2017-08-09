import React from 'react'
import axios from 'axios'
import { connect } from "react-redux"
import { getConfig } from "../actions/configAction"
import { getMovies } from "../actions/popularActions"
import { addFavorite } from "../actions/favoriteActions"

export class Movies extends React.Component {

	componentDidMount() {
		this.props.dispatch(getConfig());
		this.props.dispatch(getMovies());
	}

	addFavorite(data) {

	}

	render() {
		console.log('state props', this.props.config);
		return (
			<div className="main-container">
			<div className="mdl-grid">
	          {this.props.movies.map((data, index) =>
	          	<div key={'mykey' + index} className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
		          	<div className="mdl-card demo-card-wide">
						<div className="mdl-card__title mdl-shadow--2dp" style={{background: 'url(' + this.props.config.base_url + this.props.config.poster_sizes[4] + data.poster_path + ') center / cover'}}>
							<span>{ data.vote_average }</span>
						</div>
						<h2 className="">
							{ data.title }
						</h2>
						<div className="mdl-card__supporting-text">
							{ data.release_date }
						</div>
						<div className="mdl-card__menu">
							<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
							  <i title={data.id} onClick={this.addFavorite.bind(this)} className="material-icons">share</i>
							</button>
						</div>
				    </div>
				</div>
	          	)}
	      	</div>
	      	</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
	    addFavorite: (data) => dispatch(addFavorite(data));
    }
}

const mapStateToProps = (state) => {
   console.log("mapStateToProps for movies");
   console.log("satate here", state);
   return {
       movies: state.popular.data,
       config: state.config.data.images
   };
};

export default connect(mapStateToProps)(Movies);