// import React, { useState } from 'react'

// const UseReduserExample = () => {
//     const [value, setValue] = useState(0)
//     return (
//         <div>
//             value is :{value}
//             <button onClick={() => setValue(value + 1)}>+</button>
//             <button onClick={() => setValue(value - 1)}>-</button>
//             <button onClick={() => setValue(0)}>rest</button>
//         </div>
//     )
// }

// export default UseReduserExample







import React, { useReducer } from 'react'
import reducer from '../Reducer/RduserTest'

const initalValue = {
    count:0
}
const UseReduserExample = () => {
    const [state, dispatch] = useReducer(reducer, initalValue)

    return (
        <div>
            value is :{state.count}
            <button onClick={() => dispatch({type:'increment'})}>-</button>
            <button onClick={() => dispatch({type:'decrement'})}>-</button>
            <button onClick={() => dispatch({type:'reset'})}>rest</button>
        </div>
    )
}

export default UseReduserExample