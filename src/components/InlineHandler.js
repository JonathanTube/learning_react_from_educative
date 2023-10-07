function MyComponent({ doSomething }) {
    return (
        // the exmaple of inline handler is below named onClick
        <input type="button" onClick={() => doSomething('say hello')} value="click it" />
    )
}

export default function InlineHandler() {
    const myFunc = (param) => {
        alert(param)
    }
    return (
        <MyComponent doSomething={myFunc} />
    )
}