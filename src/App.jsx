import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import { BrowserRouter as Router  ,Route,Routes } from 'react-router-dom'
import Cart from './components/cart'

 
const App = () => {
  const [cart,setCart] = useState([]) 
  function handleAdd(item) {
    setCart([...cart,item]) }
  function handleRemove(itemid) {
    setCart(cart.filter(item => item.id !== itemid))
  }
  console.log(cart)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home add={handleAdd}   />}> </Route>
        <Route exact path='/cart' element={<Cart remove={handleRemove} cart ={cart}   />}> </Route>
      </Routes> 
    </Router>
  )
}

export default App