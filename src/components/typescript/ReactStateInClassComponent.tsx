import React from "react"
type Props = {}
type State = {
  count: number
}
export default class ReactClassComponentState extends React.Component<
  Props,
  State
> {
  state = {
    count: 0
  }

  // This is a simple way to define the state in React, but it's a bit verbose.
  // constructor(props: {}) {
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  // }

  render(): React.ReactNode {
    return (
      <button
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        {this.state.count ? this.state.count : "Click to start counter"}
      </button>
    )
  }
}
