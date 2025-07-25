import React from 'react'
import "../../styles/works.css"
function Works() {
  return (
    <div className='work-container' id='portfolio'>
        <div className='work'>
        <div className='work-circle'>
            <p>12+</p>
        </div>
          <div className='work-det'>
          <span>years</span>
           <span className='work-exp'>Experience</span>
           </div>
        </div>
         <div className='work'>
        <div className='work-circle'>
            <p>100+</p>
        </div>
          <div className='work-det'>
          <span>completed</span>
           <span className='work-exp'>Projects</span>
           </div>
        </div>
         <div className='work'>
        <div className='work-circle'>
            <p>10+</p>
        </div>
        <div className='work-det'>
          <span>companies</span>
           <span className='work-exp'>Work</span>
           </div>
        </div>
    </div>
  )
}

export default Works
