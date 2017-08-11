export default function reducer(state={
    data: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_FAVORITE_STARTED": {
        return {...state, fetching: true}
      }
      case "FETCH_FAVORITE_ERROR": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_FAVORITE_DONE": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          data: state.data.concat(action.payload)
        }
      }
    }

    return state
}