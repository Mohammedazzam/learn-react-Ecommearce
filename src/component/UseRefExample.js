// import React, {useRef} from 'react'

// const UseRefExample = () => {
//     const value = useRef(null);
//     const focus = () => {
//         value.current.focus();
//         console.log(value.current)
//     }
//     console.log(value)
//   return (
//     <div>
//         <input type="text" ref={value}/>
//         <button onClick={focus}>Foucs</button>
//     </div>
//   )
// }

// export default UseRefExample



// import React, {useRef} from 'react'

// const UseRefExample = () => {
//     const valueInput = useRef(null);
//     const focus = () => {
//         valueInput.current.focus();
//         console.log(valueInput.current.value)
//     }
//     console.log(valueInput)
//   return (
//     <div>
//         <input type="text" ref={valueInput}/>
//         <button onClick={focus}>Foucs</button>
//     </div>
//   )
// }

// export default UseRefExample






// import React, {useRef, useContext} from 'react'
// import { ColorContext } from './UseContextExample';

// const UseRefExample = () => {
//   const {data , changeData} = useContext(ColorContext)
//     const valueInput = useRef(null);
//     const focus = () => {
//         valueInput.current.focus();
//         console.log(valueInput.current.value)
//         changeData(valueInput.current.value)
//     }
//   return (
//     <div>
//         <input type="text" ref={valueInput}/>
//         <button onClick={focus}>Foucs</button>
//     </div>
//   )
// }

// export default UseRefExample




// import React, {useRef, useContext} from 'react'
// import { ColorContext } from './UseContextExample';

// const UseRefExample = () => {
//   const {changeData} = useContext(ColorContext)
//     const valueInput = useRef(null);
//     const focus = () => {
//         valueInput.current.focus();
//         console.log(valueInput.current.value)
//         changeData('5',valueInput.current.value)
//     }
//   return (
//     <div>
//         <input type="text" ref={valueInput}/>
//         <button onClick={focus}>Foucs</button>
//     </div>
//   )
// }

// export default UseRefExample






import React, {useRef, useContext} from 'react'
import { ColorContext } from './UseContextExample';

const UseRefExample = () => {
  const {changeData} = useContext(ColorContext)
    const valueInput = useRef(null);
    const focus = () => {
        valueInput.current.focus();
        console.log(valueInput.current.value)
        changeData(Math.random(),valueInput.current.value)
    }
  return (
    <div>
        <input type="text" ref={valueInput}/>
        <button onClick={focus}>Foucs</button>
    </div>
  )
}

export default UseRefExample