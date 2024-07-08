import React from 'react'

function handleImportant(){}
function handleDelete(){}
function handleEdit(){}

const Nav = () => {
  return (
    <nav>
        <button onClick={()=> handleImportant()}>important</button>        
        <button onClick={()=> handleDelete()}>delete</button>
        <button onClick={()=> handleEdit()}>edit</button>
    </nav>
  )
}

export default Nav