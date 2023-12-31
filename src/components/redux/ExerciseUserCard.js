import "./css/ExerciseUserCard.css"
import { Component } from "react"
import state from "./store/ExerciseUserCardStore.js"

export default class UserCard extends Component {
  render() {
    const { name, description, likes, location } = state.getState()
    return (
      <div className="USER_CARD">
        <section className="User__img">
          <img src={"https://image.ibb.co/jj1FGp/user.png"} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    )
  }
}
