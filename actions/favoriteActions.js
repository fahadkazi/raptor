import axios from 'axios'
import { API_URL, API_KEY } from '../config/const'

export function favoriteMovie(movieId) {
	return (dispatch, getState) => {
		dispatch({type: "FETCH_FAVORITE_STARTED"})
		axios.get(API_URL + 'movie/' + movieId + '?api_key=' + API_KEY + '&language=en-US')
		.then(response => { console.log('favorites resp', response); dispatch({type: "FETCH_FAVORITE_DONE", payload: response.data}) })
		.catch(error => { dispatch({type: "FETCH_SEARCH_ERROR", error: error}) })
	}
}