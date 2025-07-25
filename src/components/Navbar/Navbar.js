import React from 'react'
import Toggle from '../Toggle/Toggle'
import "../../styles/navbar.css"
import { useState } from 'react'
function Navbar() {
  const [active,setActive] = useState("home")
  return (
    <div className='nav-container'>
        <div className='names'>
        <h1>Vishal Voorugonda</h1>
       <Toggle/>
       </div>
       <div className='nav-links'>
           <a href='#home' onClick={()=>setActive("home")} className={`${active === "home" ? "active":""}`}><li>Home</li></a>
           <a href='#domains' onClick={()=>setActive("domains")} className={`${active === "domains" ? "active":""}`}><li>Domains</li></a>
           <a href='#experience' onClick={()=>setActive("experience")} className={`${active === "experience" ? "active":""}`}><li>Experience</li></a>
           <a href='#portfolio' onClick={()=>setActive("portfolio")} className={`${active === "portfolio" ? "active":""}`}><li>Portfolio</li></a>
           <a href='#contact'><button className='contact'>Contact Me</button></a>
       </div>
    </div>
  )
}

export default Navbar
