
import {useState} from 'react'
function App() {
 
   let [counter,setCounter]= useState(0)

  // let counter=15

  const addValue=()=>{
    console.log("click",counter);
    // counter=counter+1
    if (counter<20) {
      setCounter(counter=counter+1)
      setCounter(counter=counter+1)
      setCounter(counter=counter+1)
    }
  }
  const removeValue=()=>{
    // console.log("click",counter);
    // counter=counter+1
    if (counter>0) {
      setCounter(counter-1)
    }

  }
  return (
    <>
    <h1>Hirdesh Mewada</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}>Add Value {counter}</button>
    <br />
    <br />
    <button
    onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
   
}

export default App
