import React from "react"
import "./index.css"
import store from "../../store"
import { setActiveUserId, deleteContact } from "../../actions"
const User = ({ user }) => {
  const { name, status } = user
  const default_pic =
    "https://img.zcool.cn/community/019fb65925bc32a801216a3ef77f7b.png@1280w_1l_2o_100sh.png"

  const handleUserClick = ({ user_id }) => {
    store.dispatch(setActiveUserId(user_id))
  }

  function handleCrossClick(e, user_id) {
    e.stopPropagation()
    store.dispatch(setActiveUserId(null))
    store.dispatch(deleteContact(user_id))
  }

  return (
    <div
      className="User"
      onClick={() => {
        handleUserClick(user)
      }}
    >
      <p
        className="User__closeIcon"
        onClick={(e) => handleCrossClick(e, user.user_id)}
      >
        X
      </p>
      <img src={default_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  )
}

export default User
