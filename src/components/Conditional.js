import React from "react"
export default function Conditional() {
    const [flag, setFlag] = new React.useState(false)

    const toggle = () => {
        setFlag(!flag)
    }
    return (
        <>
            {flag && <div>flag is true</div>}
            <input type='button' value='toggle' onClick={toggle} style={{ 'cursor': 'pointer' }} />
            {!flag && <div>flag is false</div>}
        </>
    )
}