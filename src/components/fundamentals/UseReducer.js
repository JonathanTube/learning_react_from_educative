import React from "react"

// why use it? 让开发人员能够更好的管理代码中的数据
export default function UseReducer() {
    const countReducer = (state, action) => {
        switch (action.type) {
            case 'SET_VALUE': // set default value according to the parameter that's from payload
                return action.payload
            case 'INCREASE_VALUE':
                return state + 1
            case 'DECREASE_VALUE':
                return state - 1
            default:
                throw new Error()
        }
    }
    // the react reducer return a new state
    // the first param is reducer function, the second param is default state value
    const [value, dispatchValue] = React.useReducer(countReducer, 100)

    const setValue = () => {
        dispatchValue({
            type: 'SET_VALUE',
            payload: 0
        })
    }

    const increase = () => {
        dispatchValue({
            type: 'INCREASE_VALUE',
            payload: value
        })
    }

    const decrease = () => {
        dispatchValue({
            type: 'DECREASE_VALUE',
            payload: value
        })
    }

    return (
        <>
            <div>{value}</div>
            <input type='button' value='increase' onClick={increase} />
            <input type='button' value='decrease' onClick={decrease} />
            <input type='button' value='setValue' onClick={setValue} />
        </>
    )
}