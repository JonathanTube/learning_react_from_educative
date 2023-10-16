import {
  SET_ACTIVE_USER_ID,
  DELETE_CONTACT,
  SEND_MESSAGE,
} from "../constants/action-types"

const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
})

const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
})

const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    userId,
    message,
  },
})

export { setActiveUserId, deleteContact, sendMessage }
