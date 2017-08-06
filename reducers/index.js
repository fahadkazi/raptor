import { combineReducers } from "redux"

import popular from "./popularReducer"
import config from "./configReducer"

export default combineReducers({
  popular,
  config
})