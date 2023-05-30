import React , {useState}from 'react'
import "./style.css"

const FromData = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    message:""
  });

  const handleChange = e => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='from-data'>
      <div > 
         <h2 className='from-head'>Get In Touch</h2>
         <div className='inside-data'>
         <input type="text" placeholder='Name' onChange={handleChange} />
         <input type="email" placeholder='Email' onChange={handleChange} />
         <input type="number" placeholder='Phone Number' max={10} onChange={handleChange} />
         <input type="text" placeholder='Message' onChange={handleChange} />
           <div className='submit-btn'><span>Submit</span></div>
         </div>
       
        
      
      </div>
     

    </div>
  )
}

export default FromData