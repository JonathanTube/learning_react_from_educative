import React, { useState } from "react"
import store from "../../store"
import Header from "../../components/Header"
import Chat from "../../components/Chat"
import "./index.css"
import _ from "lodash"
import MessageInput from "../../components/MessageInput"

const ChatWindow = ({ activeUserId }) => {
  const { contacts, messages, typing } = store.getState()
  const activeUser = contacts[activeUserId]
  const activeMessages = messages[activeUserId]

  const [messageList, setMessageList] = useState(activeMessages)
  store.subscribe(() => {
    setMessageList(store.getState().messages[activeUserId])
  })
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat messages={_.values(messageList)} />
      <MessageInput value={typing} />
    </div>
  )
}
export default ChatWindow
