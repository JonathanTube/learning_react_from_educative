import React, { Component } from "react"
import formatNumber from "format-number"
//import photographer from "./images/girl.png";
import "./css/ExerciseBankApplication.css"
import store from "./store/ExerciseBankApplicationStore"

const { username, totalAmount } = store.getState()

class ExerciseBankApplication extends Component {
  state = {
    totalAmount: totalAmount,
  }
  render() {
    const userWithdraw = () => {
      store.dispatch({
        type: "WITHDRAW",
        totalAmount: 10000,
      })
    }
    const userDeposit = () => {
      store.dispatch({
        type: "DEPOSIT",
        totalAmount: 10000,
      })
    }
    store.subscribe(() => {
      //   console.log(store.getState().totalAmount)
      this.setState({
        totalAmount: store.getState().totalAmount,
      })
    })
    return (
      <div className="Exercise_Bank_Application">
        <img
          className="App__userpic"
          src={"https://image.ibb.co/nC8vGp/girl.png"}
          alt="photographer"
        />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(this.state.totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={userWithdraw}>
            WITHDRAW $10,000
          </button>
          <button data-amount="5000" onClick={userDeposit}>
            DEPOSIT $5,000
          </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    )
  }
}

export default ExerciseBankApplication
