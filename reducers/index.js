import { combineReducers } from "redux"

import popular from "./popularReducer"
import config from "./configReducer"
import search from "./searchReducer"
import favorite from "./favoriteReducer"

export default combineReducers({
  popular,
  config,
  favorite
})