export default function reducer(state={
    data: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_CONFIG_STARTED": {
        return {...state, fetching: true}
      }
      case "FETCH_CONFIG_ERROR": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_CONFIG_DONE": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          data: action.payload,
        }
      }
    }

    return state
}