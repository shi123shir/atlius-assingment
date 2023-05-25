import React from 'react'
import "./style.css"

const FromData = () => {
  return (
    <div className='from-data'>
      <div > 
         <h2 className='from-head'>Get In Touch</h2>
         <div className='inside-data'>
         <input type="text" placeholder='Name' />
         <input type="email" placeholder='Email' />
         <input type="number" placeholder='Phone Number' max={10} />
         <input type="text" placeholder='Message' />
           <div className='submit-btn'><span>Submit</span></div>
         </div>
       
        
      
      </div>
     

    </div>
  )
}

export default FromData