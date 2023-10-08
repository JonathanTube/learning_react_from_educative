import axios from "axios"
import React from "react";

export default function AxiosDemo() {
    const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=vue';

    const [res, setRes] = React.useState([])
    const [err, setErr] = React.useState()

    /**
     * test axios
     */
    // const getData = async () => {
    //     let res = await axios.get(API_ENDPOINT)
    //     setRes(res.data.hits)
    //     setErr(null)
    // }

    React.useEffect(() => {
        axios.get(API_ENDPOINT).then(res => {
            setRes(res.data.hits)
        }).catch(e => {
            setErr(e.message)
        })
        // getData()
    }, [])



    return err || res.map(item => <div key={item.objectID}><a href={item.url}>{item.title}</a></div>)
}