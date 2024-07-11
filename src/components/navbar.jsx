import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <> 
        <nav>
            <Link to='/'>  Home  </Link>
            <Link to='/cart'>  Cart  </Link>
        </nav>
    </>
  )
}

export default navbar