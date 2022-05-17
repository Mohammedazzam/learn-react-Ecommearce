import React , {createContext} from 'react'

//1-create Context
const ColorContext = createContext();

//2-create provider
const UseContextProvider = ({children}) => {
  return (
    <ColorContext.Provider value='red'>
      {children}
    </ColorContext.Provider>
  )
}

//3-export context to use , provider to wrap all component
export {UseContextProvider , ColorContext} 