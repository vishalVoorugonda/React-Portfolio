import React, { useEffect, useState } from 'react'
import "../../styles/toggle.css"
function Toggle() {
    const [toggle,setToggle] = useState(()=>{
          const saved =  localStorage.getItem("themeToggle")
           return saved === "true"
    })

    const handleToggle = () =>{
          setToggle((prev)=>{
             const newValue = !prev
             localStorage.setItem("themeToggle",newValue)
             return newValue
          })
    }

    useEffect(()=>{
        document.body.classList.remove(toggle ? "light" : "dark");
  document.body.classList.add(toggle ? "dark" : "light");
    },[toggle])
  return (
    <div className='toggle-container' onClick={handleToggle}>
       <div className={`inner-circle ${toggle ? "active":""}`}></div>
    </div>
  )
}

export default Toggle
