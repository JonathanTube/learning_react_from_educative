import React from "react"

// old method
class CustomInput extends React.Component {
    render() {
        const { value } = this.props // the props is from the this context.
        return (
            <div>{value}</div>
        )
    }
}

export default function ClassComponent() {
    return <CustomInput value={'hello world'} />
}