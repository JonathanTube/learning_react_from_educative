import React from "react"

export default function Fetch() {
    const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

    const [data, setData] = React.useState([])
    const [query, setQuery] = React.useState('react')

    const getData = () => {
        // fetch is a buildin function in browser
        // the response data isn't a json type, so it should be converted into json object by json() function
        fetch(`${API_ENDPOINT}${query}`).then(data => data.json()).then(data => {
            // console.log(data.hits)
            setData(data.hits)
        })
    }

    const setQueryStr = (e) => {
        setQuery(e.target.value)
    }

    const List = () => {
        return (
            <ul>
                { // don't forget this curly brace
                    data.map((item) => {
                        return (<li style={{ listStyle: 'none' }} key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>)
                    })
                }
            </ul>
        )
    }

    return (
        <>
            {/* 这里一定要是可以迭代的，不同于vue可以直接显示json array或者json object */}
            {/* <div>{data.length}</div> */}
            <List />
            <input value={query} onChange={setQueryStr}></input>
            &nbsp;
            <input type='button' value='get data' onClick={getData} disabled={!query} />
        </>
    )
}