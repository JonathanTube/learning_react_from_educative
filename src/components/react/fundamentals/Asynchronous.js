import React from "react"

const initialStories = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
]

const getAsyncStories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(initialStories)
        }, 1000 * 2)
    })
}

export default function Asynchronous() {
    const [list, setList] = React.useState([])

    React.useEffect(() => {
        getAsyncStories().then(res => {
            setList(res)
        })
    }, []) // if there is a [], then function will be executed only once.


    return (
        list.length === 0 ? <span>loading...</span> :
            list.map(item => {
                return <div key={item.objectID}>{item.title}</div>
            })
    )
}