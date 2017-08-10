export default function reducer(state={
    data: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_SEARCH_STARTED": {
        return {...state, fetching: true}
      }
      case "FETCH_SEARCH_ERROR": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_SEARCH_DONE": {
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