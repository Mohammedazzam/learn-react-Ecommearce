import React, { useState, useEffect } from 'react'
import useFetchdata from '../customHooks/Fetchadta'
const UseCustomHook = () => {
    const [state] = useFetchdata('https://jsonplaceholder.typicode.com/todos')
    return (
        <div>
            {state.map((item) => {
                return (<p>{item.title}</p>)
            })}
        </div>
    )
}

export default UseCustomHook