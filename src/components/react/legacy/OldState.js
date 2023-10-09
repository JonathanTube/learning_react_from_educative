import React from "react"
class OldState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: 'React'
        }
    }

    render() {
        const { searchTerm } = this.state
        // 老版本如果这里写function会报setState，undefined也就是this=undefined
        const onClick = () => {
            this.setState({ // old method
                searchTerm: 'Vue'
            })
        }
        return (
            <div>
                <div>{searchTerm}</div>
                <input type='button' value='click' onClick={onClick} />
            </div>
        )
    }
}
export default OldState