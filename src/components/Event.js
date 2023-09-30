function handleChange(e) {
    alert(e)
}

const clickButton = () => {
    alert("click the button")
}

const Event = () => {
    return (
        <div>
            <label htmlFor="search">Search: </label>
            {/* This isn't as same as event name used in Html dom, ps: @change= */}
            <input id="search" type="text" onChange={handleChange} />
            &nbsp;
            <input type="button" value="click me" onClick={clickButton} />
        </div>
    )
}
export default Event