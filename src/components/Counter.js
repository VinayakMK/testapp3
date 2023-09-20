import React, { useState } from 'react'

function Counter() {
    let initialCounter = 10000;
    const [counter,setCounter] = useState(initialCounter)
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={()=>setCounter(counter+10)}>Increment</button>
        <button onClick={()=>setCounter(counter-10)}>Decrement</button>
        <button onClick={()=>setCounter(initialCounter)}>Reset</button>
    </div>
  )
}

export default Counter