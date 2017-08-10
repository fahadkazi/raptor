import { combineReducers } from "redux"

import popular from "./popularReducer"
import config from "./configReducer"
import search from "./searchReducer"

export default combineReducers({
  popular,
  config,
  search
})