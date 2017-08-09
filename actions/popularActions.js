import axios from 'axios'
import { POPULAR_MOVIES } from '../config/const'

export function getMovies() {
    return (dispatch, getState) => {
        dispatch({type : "FETCH_POPULAR_STARTED"});
        
        axios.get(POPULAR_MOVIES)
            .then(response => { console.log('res', response.data.results); dispatch({type : "FETCH_POPULAR_DONE", payload : response.data.results}) })
            .catch(error => { dispatch({type : "FETCH_POPULAR_ERROR", error : error}); })
    };
}

// export function fetchPopularMovies() {
// 	return function(dispatch) {
// 		axios.get(config.API_URL + 'configuration?api_key=' + config.API_KEY)
// 			.then(res => {
// 				console.log('conf', res);
// 				let imgUrl = res.data.images.base_url;
// 				let postSize = res.data.images.poster_sizes[4];
// 				this.setState({ imgUrl, postSize });
// 			})
// 		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + config.API_KEY + '&language=en-US&page=1')
// 			.then(res => {
// 				console.log('mov', res);
// 				let moviesData = res.data.results.map(function(value, key) {
// 					return value;
// 				})

// 				this.setState({ moviesData });
// 			})
// 	}
// }