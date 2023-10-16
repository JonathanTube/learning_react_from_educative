import React from "react"
import "./index.css"
const Empty = ({ user }) => {
  const { name, status } = user
  const first_name = name.split(" ")[0]
  const defaultImg =
    "https://img1.baidu.com/it/u=3130960825,4175655092&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  return (
    <div className="Empty">
      <h1 className="Empty__name">Welcome, {first_name} </h1>
      <img src={defaultImg} alt={name} className="Empty__img" />
      <p className="Empty__status">
        <b>Status:</b> {status}
      </p>
      <button className="Empty__btn">Start a conversation</button>
      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  )
}
export default Empty
