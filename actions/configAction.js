import axios from 'axios'
import config from '../config/const'

export function getConfig() {
	return (dispatch, getState) => {
		dispatch({type: "FETCH_CONFIG_STARTED"});

		axios.get(config.CONFIG)
		.then(response => { console.log('dt', response); dispatch({type: "FETCH_CONFIG_DONE", payload: response.data}) })
		.catch(error => { dispatch({type: "FETCH_CONFIG_ERROR", error: error}) })
	}
}