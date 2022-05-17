// import React from "react";
// import NavBar from "./component/NavBar"
// import Footer from "./component/Footer"
// import Content from "./component/Content"
// import About from "./component/About"
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ErrorNotFound from "./component/Error404"
// import Home from "./component/Home"

// const App = () => {
//   return (
//     <div>
//       <NavBar />

//       <BrowserRouter>
//         <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/content" element={<Content />}/>
//           <Route path="/about" element={<About />}/>
//           <Route path="/footer" element={<Footer />}/>
//           <Route path="/*" element={<ErrorNotFound />}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;



/************UseState************/
// import React , {useContext} from "react";
// import StateExamble from "./component/State";
// import UseEffectExample from "./component/UseEffectExample";
// import UseRefExample from "./component/UseRefExample";
// import {ColorContext} from "./component/UseContextExample";

// const App = () => {

//   const data = useContext(ColorContext)
//   return (
//     <div>
//       {/* <StateExamble/> */}
//       {/* <UseEffectExample/> */}
//       {/* <UseRefExample/> */}
//       {data}
//     </div>
//   )
// }

// export default App;







/**************UseContext***********/
// import React , {useContext} from "react";
// import {ColorContext} from "./component/UseContextExample";
// import UseRefExample from "./component/UseRefExample";

// const App = () => {

//   const {data , changeData} = useContext(ColorContext)
//   return (
//     <div>
//       {data}
//       <UseRefExample/>
//     </div>
//   )
// }

// export default App;









import React , {useContext} from "react";
import {ColorContext} from "./component/UseContextExample";
import UseRefExample from "./component/UseRefExample";

const App = () => {

  const {data , changeData} = useContext(ColorContext)
  return (
    <div>
      {data.id}
      {data.name}
      <UseRefExample/>
    </div>
  )
}

export default App;