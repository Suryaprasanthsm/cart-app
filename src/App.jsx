

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componenta/Header'
import Home from './componenta/Home'
import Cart from './componenta/Cart'
import { useState } from 'react'
function App() {
  const[cart,setCart]=useState([])
  
  
  return (
    <>
   <BrowserRouter>
   <Header/>
   <div className='container'>
    <Routes>
      <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   </div>
   </BrowserRouter>
    </>
  )
}

export default App
