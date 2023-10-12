import React, { Component, createRef } from "react"

class ReactFunctionComponentRefs extends Component {
  // private inputRef = useRef<HTMLInputElement>(null) // not useRef in Class
  private inputRef = createRef<HTMLInputElement>()

  componentDidMount(): void {
    if (this.inputRef.current) {
      this.inputRef.current.focus()
    }
  }
  render(): React.ReactNode {
    return <input ref={this.inputRef}></input>
  }
}
export default ReactFunctionComponentRefs
