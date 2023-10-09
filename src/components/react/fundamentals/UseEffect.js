import React from "react"

export default function UseEffect() {
    const [value, setValue] = React.useState(localStorage.getItem('value') || 'react')

    // when the value was changed, the first function in useEffect will be executed.
    // corresponding to VUE watch
    React.useEffect(() => {
        localStorage.setItem('value', value)
    }, [value])

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type='input' value={value} onChange={changeValue} />
            <p>display: {value}</p>
        </div>
    )
}