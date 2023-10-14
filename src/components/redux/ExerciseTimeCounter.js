import React, { Component } from "react"
import {
  setActiveSession as setActiveSessionAC,
  updateCounter
} from "./actions/ExerciseTimeCounter.js"
import "./css/ExerciseTimeCounter.css"
import store from "./store/ExerciseTimeStore.js"

class ExerciseTimeCounter extends Component {
  state = {
    days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "DAYS"
  }
  render() {
    const { days, hours, minutes, seconds, activeSession } = store.getState()

    store.subscribe(() => {
      this.setState({
        ...store.getState()
      })
    })

    const setActiveSession = (e) =>
      store.dispatch(setActiveSessionAC(e.target.value))

    const handleCounter = (e) => {
      const type = e.target.dataset.type
      store.dispatch(updateCounter(type, activeSession))
    }

    return (
      <div className="Exercise_TIME_COUNTER">
        <header>
          <h4 className="Exercise_TIME_COUNTER__subheader">BOOK NAME</h4>
          <h1 className="Exercise_TIME_COUNTER__header">
            Understanding Redux - 1
          </h1>
        </header>

        <section className="Counter">
          <h4 className="Exercise_TIME_COUNTER__subheader">
            TOTAL TIME SPENT ON THE PROJECT
          </h4>

          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION: </span>
              <select
                className="Counter__text--grey"
                onChange={setActiveSession}
                value={activeSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
                <option>SECONDS</option>
              </select>
            </div>

            <div className="Counter--main__values">
              <div>
                <span className="Exercise_TIME_COUNTER__text--white Counter__text--large">
                  {days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="Exercise_TIME_COUNTER__text--white Counter__text--large">
                  {hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="Exercise_TIME_COUNTER__text--white Counter__text--large">
                  {minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="Exercise_TIME_COUNTER__text--white Counter__text--large">
                  {seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>
          <div className="Exercise_TIME_COUNTER__buttons">
            <button
              className="Exercise_TIME_COUNTER__text--white"
              data-type="INCREASE_COUNTER"
              onClick={handleCounter}
            >
              INCREASE
            </button>
            <button
              className="Exercise_TIME_COUNTER__text--white"
              data-type="DECREASE_COUNTER"
              onClick={handleCounter}
            >
              DECREASE
            </button>
          </div>
        </section>
      </div>
    )
  }
}

export default ExerciseTimeCounter
