import React from "react"
import "./index.css"
import ChatWindow from "../../containers/ChatWindow"
import Empty from "../Empty"
const Main = ({ user, activeUserId }) => {
  return (
    <main className="Main">
      {activeUserId ? (
        <ChatWindow activeUserId={activeUserId} />
      ) : (
        <Empty user={user} activeUserId={activeUserId} />
      )}
    </main>
  )
}
export default Main
