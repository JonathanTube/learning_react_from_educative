import React from "react"

const Ref = () => {
    const firstRef = React.useRef()
    const clickMe = (e) => {
        // current will return the dom element
        console.log(firstRef.current)
        console.log(e.target.value)
    }
    return (
        <input type="button" ref={firstRef} onClick={clickMe} value='click me in first component' />
    )
}

export default Ref