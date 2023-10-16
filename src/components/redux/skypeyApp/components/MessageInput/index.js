import React, { useState } from "react"
import store from "../../store"
import { sendMessage } from "../../actions"
import "./index.css"
const MessageInput = ({ value }) => {
  const [typing, setTyping] = useState("")
  const handleChange = (e) => {
    setTyping(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (typing) {
      const { activeUserId } = store.getState()
      store.dispatch(sendMessage(typing, activeUserId))
      setTyping("")
    }
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={typing}
        placeholder="write a message"
      />
    </form>
  )
}
export default MessageInput
