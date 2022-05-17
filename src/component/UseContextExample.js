// import React , {createContext,useState} from 'react'

// //1-create Context
// const ColorContext = createContext();
// //7-Create Context

// //2-create provider
// const UseContextProvider = ({children}) => {

//   const [data, setstate] = useState('white')

//   const changeData = (color) => {
//     setstate(color)
//   }
//   return (
//     <ColorContext.Provider value={{data , changeData}}>
//       {children}
//     </ColorContext.Provider>
//   )
// }

// //3-export context to use , provider to wrap all component
// export {UseContextProvider , ColorContext} 








import React , {createContext,useState} from 'react'

//1-create Context
const ColorContext = createContext();
//7-Create Context

//2-create provider
const UseContextProvider = ({children}) => {

  const [data, setstate] = useState({id:'1', name:'Mohammed'})

  const changeData = (id , name) => {
    setstate({id ,name})
  }
  return (
    <ColorContext.Provider value={{data , changeData}}>
      {children}
    </ColorContext.Provider>
  )
}

//3-export context to use , provider to wrap all component
export {UseContextProvider , ColorContext} 