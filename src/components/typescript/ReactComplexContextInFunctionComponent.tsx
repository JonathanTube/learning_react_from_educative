import React from "react"

type ComplexContext = {
  sayHello: (name: string) => void
}

const SayHelloContext = React.createContext<ComplexContext | undefined>(
  undefined
)

const ComponentParent = ({ children }) => {
  const [name, setName] = React.useState<string>("no body")
  const sayHello = (name: string) => {
    setName(name)
  }

  return (
    <>
      <div>{name} says Hello!</div>
      <SayHelloContext.Provider value={{ sayHello: sayHello }}>
        {children}
      </SayHelloContext.Provider>
    </>
  )
}

const ComponentChild = () => {
  return (
    <SayHelloContext.Consumer>
      {(sayHelloContext) => {
        return (
          sayHelloContext && (
            <input
              type="button"
              value="click"
              //   1. The child component passes the name via the context
              onClick={() => sayHelloContext.sayHello("Jonathan")}
            />
          )
        )
      }}
    </SayHelloContext.Consumer>
  )
}

export default function ReactComponentComplexContext() {
  return (
    <ComponentParent>
      <ComponentChild />
    </ComponentParent>
  )
}
