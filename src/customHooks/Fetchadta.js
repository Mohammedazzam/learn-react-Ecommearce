import React , {useEffect, useState} from "react"
export const useFetchdata = (url) => {
    const [state, setstate] = useState([])
    useEffect(() => {
        fetch(url).then
        (res => res.json()).then(data=>setstate(data))
    }, [])
    return [state]
}

export default useFetchdata