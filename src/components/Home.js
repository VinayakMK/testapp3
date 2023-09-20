import React, { useState } from 'react'


function Home() {
    const [name,setName] = useState('Anjali')
    const [age,setAge] = useState(23)
  return (
    <div>
        <h1>{name},{age}</h1>
        <button onClick={()=>setName('Vinayak')}>Change</button>
        <button onClick={()=>setAge(age+1)}>Age+</button>
    </div>
  )
}

export default Home