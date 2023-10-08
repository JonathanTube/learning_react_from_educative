export default function JSX() {
    let title = 'jsx in react'
    return (
        <div>
            <h1> Hello {title} </h1>
            {/* The htmlFor reflects the for attribute in HTML. */}
            {/* The htmlFor is assigned to a html elemnt, when you click this element, the input will be focused. */}
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />
        </div>
    )
}