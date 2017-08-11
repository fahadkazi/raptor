import axios from 'axios'
import { SEARCH_MOVIES } from '../config/const'

export function searchMovie(query) {
	return (dispatch, getState) => {
		dispatch({type: "FETCH_SEARCH_STARTED"});

		axios.get(SEARCH_MOVIES + '&query=' + query)
		.then(response => { console.log('search', response); dispatch({type: "FETCH_POPULAR_DONE", payload: response.data.results}) })
		.catch(error => { dispatch({type: "FETCH_SEARCH_ERROR", error: error}) })
	}
}