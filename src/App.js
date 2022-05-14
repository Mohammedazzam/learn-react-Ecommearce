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
import React from "react";
import StateExamble from "./component/State";
import UseEffectExample from "./component/UseEffectExample";
import UseRefExample from "./component/UseRefExample";

const App = () => {
  return (
    <div>
      {/* <StateExamble/> */}
      {/* <UseEffectExample/> */}
      <UseRefExample/>
    </div>
  )
}

export default App;
