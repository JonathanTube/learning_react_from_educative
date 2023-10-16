import React, { useState } from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import store from "./store/index"
import _ from "lodash"

const Skypey = () => {
  const [activeUserId, setActiveUserId] = useState()

  // const { contacts, user, activeUserId } = store.getState()
  const { contacts, user } = store.getState()
  store.subscribe(() => {
    // why does the change occur many times?
    console.log(store.getState())
    const { activeUserId } = store.getState()
    setActiveUserId(activeUserId)
  })
  return (
    <div className="Skypey_App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  )
}

export default Skypey
