import { combineReducers } from "redux"
import contactReducer from "./contact"
import userReducer from "./user"
import activeUserIdReducer from "./activeUserId"
import messagesReducer from "./messages"

// combine different reducers
export default combineReducers({
  user: userReducer,
  contacts: contactReducer,
  activeUserId: activeUserIdReducer,
  messages: messagesReducer,
})
