import React, { Component } from "react"

const ThemeColor = React.createContext("")

// componentA
class ComponentA extends Component<{
  tips: string
  children: React.ReactNode
}> {
  state = {
    color: "white",
  }
  changeThemeColor = () => {
    if (new Date().getSeconds() % 2 === 0) {
      this.setState({ color: "yellow" })
    } else {
      this.setState({ color: "pink" })
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <div>tips:{this.props.tips}</div>
        <ThemeColor.Provider value={this.state.color}>
          <div>{this.props.children}</div>
        </ThemeColor.Provider>
        &nbsp;
        <input
          type="button"
          onClick={this.changeThemeColor}
          value="change color"
        />
        &nbsp;
      </div>
    )
  }
}

// componentB
class ComponentB extends Component {
  render(): React.ReactNode {
    return (
      <ThemeColor.Consumer>
        {(themeColor) => {
          return (
            <div style={{ background: themeColor, padding: "50px" }}>
              {"using tag : <ThemeColor.Consumer>"}
            </div>
          )
        }}
      </ThemeColor.Consumer>
    )
  }
}

export default function ReactComponentContext() {
  return (
    <>
      <ComponentA tips="hello world">
        <ComponentB />
      </ComponentA>
    </>
  )
}
