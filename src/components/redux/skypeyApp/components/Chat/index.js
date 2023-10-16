import React, { useEffect } from "react"
import { useRef } from "react"
import "./index.css"
import store from "../../store"
const Chat = ({ message }) => {
  const { text, is_user_msg } = message
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  )
}

const Chats = ({ messages }) => {
  const chatsRef = useRef(null)

  const scrollToBottom = () => {
    setTimeout(() => {
      chatsRef.current.scrollTop = chatsRef.current.scrollHeight
    }, 1000 * 0.5)
  }

  useEffect(() => {
    scrollToBottom()
  }, [])

  store.subscribe(() => {
    scrollToBottom()
  })

  return (
    <div className="Chats" ref={chatsRef}>
      {messages.map((message) => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  )
}
export default Chats
