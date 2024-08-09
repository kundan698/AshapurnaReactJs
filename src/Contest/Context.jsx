import React, { createContext, useState } from 'react'
export let ContextData = createContext()

export default function Context({children}) {
    let [Count,setCount]=useState(0)
    let obj ={
        Count,setCount
    }
  return (
    <div>
      <ContextData.Provider value={obj}>
      {children}
      </ContextData.Provider>
    </div>
  )
}
