import React from "react"

// 1. define a context at the top of the parent component
// You can use this way to pass paramenter from top component to child components instead of using Props
const ThemeColor = React.createContext("")

// componentA
const ComponentA = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = React.useState<string>("white")

  const changeThemeColor = () => {
    // console.log(new Date().getSeconds())
    if (new Date().getSeconds() % 2 === 0) {
      setColor("yellow")
    } else {
      setColor("pink")
    }
  }
  return (
    <>
      {/* 2. You wrap your children components by the context you just defined above and you have to pass a value to change something*/}
      <ThemeColor.Provider value={color}>
        <div>{children}</div>
      </ThemeColor.Provider>
      &nbsp;
      <input type="button" onClick={changeThemeColor} value="change color" />
      &nbsp;
    </>
  )
}

// componentB
const ComponentB = () => {
  // 3. you can use the context here
  const themeColor2 = React.useContext(ThemeColor)
  return (
    // 4. Using it with a tag is also ok
    <div style={{ display: "flex" }}>
      <ThemeColor.Consumer>
        {(themeColor) => {
          return (
            <div style={{ background: themeColor, padding: "50px" }}>
              {"using tag : <ThemeColor.Consumer>"}
            </div>
          )
        }}
      </ThemeColor.Consumer>
      &nbsp;
      <div style={{ background: themeColor2, padding: "30px" }}>
        using React.useContext(ThemeColor)
      </div>
    </div>
  )
}

export default function ReactComponentContext() {
  return (
    <>
      <ComponentA>
        <ComponentB />
      </ComponentA>
    </>
  )
}
