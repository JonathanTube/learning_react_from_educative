import React from "react"
export default function FormDemo() {
    const formOnSubmit = (e) => {
        console.log(1)
        // prevent the form's default behavior in browser
        // otherwise the page will be refreshed.
        e.preventDefault()
    }

    return (
        // the input must be focused then the enter button will be effect
        <form onSubmit={formOnSubmit}>
            {/* so auto focus */}
            <input autoFocus />
            &nbsp;
            <button type='submit'>Submit</button>
            {/* this is also workable <input type='submit' value='Submit'></input> */}
        </form>
    )
}