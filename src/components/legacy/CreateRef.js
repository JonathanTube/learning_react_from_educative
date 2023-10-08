import React from "react"

class OldCreateRefDemo extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef() // old
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <>
                <label>old create ref&nbsp;</label>
                {/* old */}
                <input ref={this.inputRef} />
            </>
        )
    }
}

const NewUseRefDemo = () => {
    const inputRef = React.useRef() // new

    React.useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <>
            <label>new use ref&nbsp;</label>
            {/* new */}
            <input ref={inputRef} />
        </>
    )
}

export default function CreateRefDemo() {
    return (
        <>
            <OldCreateRefDemo />
            <br />
            <NewUseRefDemo />
        </>
    )
}