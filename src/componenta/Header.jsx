import React from "react"
import { Link } from "react-router-dom"
import './Header.css';
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        Food cart
      </div>
      <ul>
         <li>   <Link to={"/"}>Home</Link> </li>
         
        
          <li>  <Link to={"/cart"}> view Cart</Link> </li>
        
      </ul>
    </div>
  )
}

export default Header
