// import React, { useState } from "react";

// const StateExamble = () => {
//     const [count, setCount] = useState(0)
//     // setCount(5)
//     // console.log(count)
//     const handelIncrese = () => {
//         setCount(count + 1)
//     }
//     const handeldescrese = () => {
//         setCount(count - 1)
//     }
//     return(
//         <div>
//             <button onClick={handelIncrese}>+</button>
//             <button onClick={handeldescrese}>-</button>
//             <label>Count Is {count}</label>
//         </div>
//     )

// };

// export default StateExamble;






//شكل آخر
// import React, { useState } from "react";

// const StateExamble = () => {
//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <button onClick={() =>setCount(count + 1)}>+</button>
//             <button onClick={() =>setCount(count - 1)}>-</button>
//             <label>Count Is {count}</label>
//         </div>
//     )

// };

// export default StateExamble;




// import React, { useState } from "react";
// const StateExamble = () => {
//     const [count, setCount] = useState(0)
//     const [text, setText] = useState('Mohammed')

//     const handelInput = (e) => {
//         setText(e.target.value)
//         console.log(text)
//     }
//     return (
//         <div>
//             <button onClick={() =>setCount(count + 1)}>+</button>
//             <button onClick={() =>setCount(count - 1)}>-</button>
//             <label>Count Is {count} The Name Is {text}</label>
//             <input type="text" value={text} onChange = {handelInput} />
//         </div>
//     )

// };

// export default StateExamble;
