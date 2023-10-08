import React from "react"
// React props are always passed down as information to the component tree!!!
export default function UseState() {
    // This is not a state variable, if you change the value, there will be nothing to happend
    let otherVal = "other value"
    // This usage just like the variables in the data scope.
    const [searchTerm, setSearchTerm] = React.useState("init")

    const inputText = (e) => {
        setSearchTerm(e.target.value)
        // the normal variable won't be changed
        otherVal = e.target.value
    }

    return (
        <div>
            <p>
                Searching for <strong>{searchTerm}</strong>.
            </p>

            <p>
                {/* Here's a normal variable which won't be changed forever */}
                {otherVal}
            </p>

            <input onChange={inputText}></input>
        </div>
    )
}