import React from "react"
import "./App.css"

import FundamentalsIndex from "./components/react/fundamentals/Index"
import LegacyIndex from "./components/react/legacy/Index"
import StylingIndex from "./components/react/styling/Index"
import ChallengeIndex from "./components/react/challenge/Index"
import TypescriptIndex from "./components/typescript/Index"
import ReduxIndex from "./components/redux/Index"

// why do we present this code here
// see: https://juejin.cn/post/7133968417404485663
const modules = [
  {
    module: "React",
    menus: ["Fundamentals", "Legacy", "Styling", "Challenge"],
  },
  { module: "TypeScript", menus: ["ReactProps"] },
  { module: "Redux", menus: ["BasicConcepts"] },
]

const Menu = ({ menus, currentMenu, onMenuChange }) => {
  return (
    <div className="Menu-List">
      {menus.map((menuName, menuIndex) => (
        <div
          key={menuIndex}
          className={`Menu ${menuName === currentMenu ? "Menu-Active" : ""}`}
          onClick={() => onMenuChange(menuName)}
        >
          {menuName}
        </div>
      ))}
    </div>
  )
}

const Module = () => {
  const [module, setModule] = React.useState()
  const [menu, setMenu] = React.useState()
  const [currentMenus, setCurrentMenus] = React.useState([])

  const onModuleChange = (moduleName) => {
    setModule(moduleName)
    let menus = modules.find((item) => item.module === moduleName).menus
    setCurrentMenus(menus)
    setMenu(menus[0])
  }

  const onMenuChange = (menuName) => {
    setMenu(menuName)
  }

  React.useEffect(() => {
    let index = 2
    setModule(modules[index].module)
    setMenu(modules[index].menus[0])
    setCurrentMenus(modules[index].menus)
  }, [])

  return (
    <>
      <div className="Module-List">
        {modules.map((item, index) => (
          <div
            className={`Module ${
              item.module === module ? "Module-Active" : ""
            }`}
            key={index}
            onClick={() => onModuleChange(item.module)}
          >
            {item.module}
          </div>
        ))}
      </div>

      <Menu
        menus={currentMenus}
        currentMenu={menu}
        onMenuChange={onMenuChange}
      />

      {/* React */}
      {module === "React" && menu === "Fundamentals" && <FundamentalsIndex />}
      {module === "React" && menu === "Legacy" && <LegacyIndex />}
      {module === "React" && menu === "Styling" && <StylingIndex />}
      {module === "React" && menu === "Challenge" && <ChallengeIndex />}

      {/* TypeScript */}
      {module === "TypeScript" && menu === "ReactProps" && <TypescriptIndex />}
      {/* Redux */}
      {module === "Redux" && menu === "BasicConcepts" && <ReduxIndex />}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Module />
    </div>
  )
}

export default App
