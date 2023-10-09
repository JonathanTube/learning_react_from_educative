import React from "react"

export default function UseStateComposition() {
    const compositionValueReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_VALUE':
                return {
                    val_0: state.val_0 + action.payload * 1,
                    val_1: state.val_1 + action.payload * 2,
                    val_2: state.val_2 + action.payload * 3
                }
            case 'DECREASE_VALUE':
                return {
                    val_0: state.val_0 - 1,
                    val_1: state.val_1 - 2,
                    val_2: state.val_2 - 3
                }
            default:
                throw new Error()
        }
    }

    // be careful of the parameter, it will be an json object as the default value of the state.
    // 如果在useState中使用对象，执行会报错，那是用useReducer好像顺理成章
    const [compositionValue, dispatchCompositionValue] = React.useReducer(compositionValueReducer, { val_0: 0, val_1: 0, val_2: 0 })

    const addValue = () => {
        dispatchCompositionValue({
            type: 'ADD_VALUE',
            payload: 2
        })
    }

    const decreaseValue = () => {
        dispatchCompositionValue({
            type: 'DECREASE_VALUE'
        })
    }
    return (
        <>
            <div>{compositionValue.val_0}</div>
            <div>{compositionValue.val_1}</div>
            <div>{compositionValue.val_2}</div>
            <input value='increase' type="button" onClick={addValue} />
            &nbsp;
            <input value='decrease' type="button" onClick={decreaseValue} />
        </>
    )
}