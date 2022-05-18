// import React, { useState } from 'react'

// const UseMemoExample = () => {

//     var randomColor = "#" + Math.floor(Math.random()*17777215).toString(16);

//     const [counter, setsCounter] = useState(0)
//     const [test, setsTest] = useState(0)
//     return (
//         <div>
//             <div style={{color:randomColor}}>
//                 value Is {counter} : = {counter * 2}
//             </div>
//             <button onClick={() => setsCounter(counter - 1)}>-</button>
//             <button onClick={() => setsCounter(counter + 1)}>+</button>
//             <button onClick={() => setsTest(test + 1)}>Test</button>
//         </div>
//     )
// }

// export default UseMemoExample












//بدي لما ادعس على التيست اللون ما يتغير ويبقى حافظ اللون
import React, { useState , useMemo } from 'react'

const UseMemoExample = () => {

    var randomColor = "#" + Math.floor(Math.random()*17777215).toString(16);


    const [counter, setsCounter] = useState(0)
    const [test, setsTest] = useState(0)


    const result = useMemo(() => {
        return (
        <div style={{color:randomColor}}>
            value Is {counter} : = {counter * 2}
        </div>
        )
    }, [counter])

    return (
        <div>
            {result}
            <button onClick={() => setsCounter(counter - 1)}>-</button>
            <button onClick={() => setsCounter(counter + 1)}>+</button>
            <button onClick={() => setsTest(test + 1)}>Test</button>
        </div>
    )
}

export default UseMemoExample