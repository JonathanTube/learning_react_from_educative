import React from "react"

export default class MyClassComponent extends React.PureComponent {
  state = {
    // val: 1,
    arr: [1],
  }
  render() {
    console.log(this.state)
    // let { val } = this.state
    let { arr } = this.state
    return (
      <button
        onClick={() => {
          arr.push(1)
          this.setState({
            // val: val + 1,
            arr: [...arr],
          })
        }}
      >
        {arr}
      </button>
    )
  }
}
