import React, { useState } from 'react'

function Pageone() {
    let initialName = 'Anjali';
    const [name,setName] = useState(initialName)
    const [age,setAge] = useState(20)
  return (
    <div className='div-pageone'>
        <h1 className='h-one'>{name},{age}</h1>
        <div className='div-name'>
            <button onClick={()=>setName('Vinayak')}>Change</button>
            <button onClick={()=>setName(initialName)}>Reset</button>
        </div>
        <div className='age'>
            <button onClick={()=>setAge(age+1)}>Age+</button>
            <button onClick={()=>setAge(age-1)}>Age-</button>
        </div>
    </div>
  )
}

export default Pageone