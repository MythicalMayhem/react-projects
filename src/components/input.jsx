import React from 'react'
import { useState } from 'react'

 

const Input = ({add}) => {
    const [value, setValue] = useState ('')
    return (
        <div>
            <input type="text" onChange={(e)=>{setValue(e.target.value)}}  />  <button onClick={()=> add(value)}>add</button>
        </div>
    )
}

export default Input