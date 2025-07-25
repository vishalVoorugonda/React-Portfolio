import React, { useState } from 'react'
import "../../styles/contact.css"
function Contact() {
  const[input,setInput] = useState({
    name:"",
    email:"",
    message:""
  })
  const[show,setshow] = useState(false)

  const handleInput = (e) =>{
     const {name,value} = e.target
     setInput({...input,[name]:value})
  }

  const handleSubmit =() =>{
      setshow(!show)
      setTimeout(()=>{
         setshow(false) 
      },3000)
      setInput({
          name:"",
          email:"",
          message:""
         })
  }
  return (
    <div className='contact-container' id='contact'>
        <div className='contact-message'>
            <h1>If you wanna hire</h1>
            <h1 className='contact-text'>Contact me</h1>
        </div>
        <div className='contact-form'>
            <input type='text' placeholder='Name'name='name' value={input.name} onChange={handleInput}/>
            <input type='email' placeholder='Email' name='email' value={input.email} onChange={handleInput}/>
            <textarea placeholder='Message' value={input.message} name='message' onChange={handleInput}></textarea>
         <button className='send-btn' onClick={handleSubmit}>Send</button>
         {show &&<div className='submitted'><span>Thank you for Submission !!</span></div>}
        </div>
      
    </div>
  )
}

export default Contact
