import React from "react"

export default function ReactComponentState() {
    // state with the useState hook is automatically strongly-typed by inferring the type from the initial value passed into the function.
    const [count, setCount] = React.useState(0)

    // If the default value is null, ts can not infer the type, so the generic type is used here.
    const [fontSize, setFontSize] = React.useState<number>(12)

    const onClick = () => {
        setCount(count + 1)
        setFontSize(fontSize + 1)
    }

    return <input type='button' value={count} onClick={onClick} style={{ fontSize: fontSize }} />
}