// import React, { useEffect } from 'react'
// const FetchAxios = () => {
//     const fetchDatat = async () => {
//         await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'GET'
//         }).then((response) => {console.log(response)})
//     }
//     useEffect(() => {
//         fetchDatat()
//     }, [])
//     return (
//         <div>Fetch Axios</div>
//     )
// }

// export default FetchAxios



// import React, { useEffect } from 'react'
// const FetchAxios = () => {
//     const fetchDatat = async () => {
//         await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'GET'
//         }).then(response => response.json()).then(data=> {console.log(data)})

//         }
//     useEffect(() => {
//         fetchDatat()
//     }, [])
//     return (
//         <div>Fetch Axios</div>
//     )
// }
// export default FetchAxios




//هذه طريقة الfetch  العادية
// import React, { useEffect ,useState } from 'react'
// const FetchAxios = () => {
//     const [state, setstate] = useState([])
//     const fetchDatat = async () => {
//         await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'GET'
//         }).then(response => response.json()).then(data=>setstate(data))
//         }

//     useEffect(() => {
//         fetchDatat()
//     }, [])
//     return (
//         <div>{state[0].title}</div>
//     )
// }
// export default FetchAxios






//Axios طريقة ال

import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FetchAxios = () => {
    const [state, setstate] = useState([])

    const fetchAxios = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setstate(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        fetchAxios()
    }, [])
    return (
        // <div>{state.map((item) =>{return (<h3>{item.title}</h3>)})}</div>
        <div>{state.map((item) =>{return (<h3>{item.body}</h3>)})}</div>
    )
}
export default FetchAxios