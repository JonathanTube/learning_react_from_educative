import React from "react"

// interface is also ok here.
type Props = {
  who: string
  message?: string
}
class Hello1 extends React.Component<Props> {
  render() {
    // destructuring!!!
    const { who, message } = this.props
    return (
      <React.Fragment>
        <div>{who}</div>
        {message && <p>{message}</p>}
      </React.Fragment>
    )
  }
}

class Hello2 extends React.Component<{ who: string }> {
  render(): React.ReactNode {
    return <div>{this.props.who}</div> // this is a bit strange.
  }
}

// default prop values
class Hello3 extends React.Component<{ who: string }> {
  // We can provide default values for props in a class component using a defaultProps static property
  static defaultProps = {
    who: "no body",
  }

  render(): React.ReactNode {
    return <div>{this.props.who}</div>
  }
}

// empty properties
class Hello4 extends React.Component<{}> {
  render(): React.ReactNode {
    return <div>no props</div>
  }
}

// Object props
type Who = {
  name: string
  friend: boolean
}
type ObjectProps = {
  who: Who
  message?: string
  myFunc: () => React.ReactNode
}

class Hello5 extends React.Component<ObjectProps> {
  render(): React.ReactNode {
    const { who, message, myFunc } = this.props
    return (
      <React.Fragment>
        <p>
          Hello, {who.name} {who.friend && " my friend"}
        </p>
        {message && <p>{message}</p>}
        {myFunc()}
      </React.Fragment>
    )
  }
}

export default function ReactclassComponentProps() {
  return (
    <>
      <Hello1 who={"Jack"} />
      <Hello2 who={"Tom"} />
      <Hello3 />
      <Hello4 />
      <Hello5
        who={{ name: "Jonathan", friend: true }}
        message={"go go go"}
        myFunc={() => (
          <div style={{ color: "red" }}>a ReactNode passed from outside</div>
        )}
      />
    </>
  )
}
