import React, { useEffect, useRef } from "react"
const ReactFunctionComponentRefs = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])
  return <input ref={inputRef}></input>
}
export default ReactFunctionComponentRefs
