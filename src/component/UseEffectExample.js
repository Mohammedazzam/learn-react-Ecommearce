// import React, { useEffect, useState } from 'react'

// const UseEffectExample = () => {

//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         console.log('hello from useEffect')
//     }, [count])

//     return (
//         <div>
//             <button onClick={() => setCount(count+1)}>+</button>
//             <label>{count}</label>
//         </div>
//     )
// }
// export default UseEffectExample



//في حين كانت فاضية ماراح تشتغل إلا مرة واحدة 
// import React, { useEffect, useState } from 'react'

// const UseEffectExample = () => {

//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         console.log('hello from useEffect')
//     }, [])

//     return (
//         <div>
//             <button onClick={() => setCount(count+1)}>+</button>
//             <label>{count}</label>
//         </div>
//     )
// }
// export default UseEffectExample


//[] الحالة الثالثة لو شلت الأقواس
import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('hello from useEffect')
    },[])

    return (
        <div>
            <button onClick={() => setCount(count+1)}>+</button>
            <label>{count}</label>
        </div>
    )
}
export default UseEffectExample