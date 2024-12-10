import { createContext } from 'preact'
import React, { useState } from 'react'
import './index.css'
import Child from './Child';

export const NameContext = createContext(); 
function Parent() {
    const [name , setName] = useState("Nebiy")
    
  return (
    <div className='box'>
      <NameContext.Provider value={name}>
        <h1>Parent div</h1>
      <h2>Hello ✌🏽: {name}</h2>
      <Child />
      </NameContext.Provider>
      
    </div>
  )
}

export default Parent