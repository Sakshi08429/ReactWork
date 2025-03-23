import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //responsible for change in value;//hook
  let [counter,setCounter]=useState(15)
  // let counter=15
  const addValue=()=>{
    console.log("value added",counter);
      
    
    counter=counter+1
    setCounter(counter)

  }
  const removeValue=()=>{
    counter=counter-1
    if(counter>=0)
    setCounter(counter-1)
  else setCounter(0)
  }

  return (
    <>
      <h1>Counter </h1>
      <h2>Counter Value</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br/>
     <button onClick={removeValue}>Remove Value{counter}</button> <br/>
       <button>Value {counter}</button>
    </>
  )
}

export default App
