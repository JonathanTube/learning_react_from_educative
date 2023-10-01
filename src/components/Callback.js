import React from "react"
// callback handlers passed as functions in props can be used to communicate up the component hierarchy.
const A = () => {
    const [value, setValue] = React.useState('React')
    const passValue_A = (value) => {
        setValue(value)
    }
    return (
        <div>
            {/* this callback func is from the B props */}
            {/* B is called controlled component */}
            <B value={value} passValue={passValue_A} />
            <C value={value} />
        </div>
    )
}




const B = (props) => {
    const passValue_B = (e) => {
        // keypoint
        props.passValue(e.target.value)
    }
    return (
        <input value={props.value} onChange={passValue_B} />
    )
}




// We can use javascript spread operator destructuring the props.
const C = ({ value }) => {
    return (
        // Here's not {props.value} anymore because of the destructuring
        <div>display:{value || '-'}</div>
    )
}


export default A