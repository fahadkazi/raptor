import React from 'react'
import axios from 'axios'
import config from '../config/const'

export default React.createClass({
	render() {
		return <div>
					<Movies />
				</div>
	}
});

class Movies extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			moviesData: []
		}
	}

	componentDidMount() {
		axios.get(config.API_URL + 'configuration?api_key=' + config.API_KEY)
			.then(res => {
				console.log('conf', res);
				let imgUrl = res.data.images.base_url;
				let postSize = res.data.images.poster_sizes[4];
				this.setState({ imgUrl, postSize });
			})
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + config.API_KEY + '&language=en-US&page=1')
			.then(res => {
				console.log('mov', res);
				let moviesData = res.data.results.map(function(value, key) {
					return value;
				})

				this.setState({ moviesData });
			})
	}

	render() {
		console.log('state', this.state);
		return (
			<div className="mdl-grid">
	          {this.state.moviesData.map((data, index) =>
	          	<div key={'mykey' + index} className="mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
		          	<div className="mdl-card mdl-shadow--2dp demo-card-wide">
				      <div className="mdl-card__title" style={{background: 'url(' + this.state.imgUrl + this.state.postSize + data.poster_path + ') center / cover'}}>
				        <h2 className="mdl-card__title-text">{data.title}</h2>
				      </div>
				      <div className="mdl-card__supporting-text">
				      	{ data.release_date }
				      </div>
				      <div className="mdl-card__actions mdl-card--border">
				        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
				          Book Now
				        </button>
				      </div>
				      <div className="mdl-card__menu">
				        <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
				          <i className="material-icons">share</i>
				        </button>
				      </div>
				    </div>
				</div>
	          )}
	      	</div>
		);
	}
}