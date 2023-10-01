import React from "react"

const MyCustomHook = (key, defaultValue) => {
    // define a react state
    const [value, setValue] = React.useState(localStorage.getItem(key) || defaultValue)
    // wathc the changes of 'value' and 'key'
    React.useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key])
    // return something.
    return [value, setValue]
}

export default function CustomHook() {
    const [searchValue, setSearchValue] = MyCustomHook('search_value', 'hello world')

    const changeValue = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <input value={searchValue} onChange={changeValue} />
    )
}