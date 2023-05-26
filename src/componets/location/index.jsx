import React from 'react'
import "./style.css"
import locIcon from "../../assets/Google Location Icon Png.png"

const Location = (props) => {
  
 
    const {addHead, address, phone, email } = props;

return (
    <div className='loc-container' id='location'>
        <div className='loc-bold-con'>
    <div style={{padding:"0% 2% 0% 2%"}}>
  <div className="card-1">
    <div className='loc-icon'>
     <img src={locIcon} alt="" />
    </div>
    <h1>{addHead}</h1>

    <div className="details">
        <p>{address}</p>
      <p>
        <span className="icon">&#9742;</span>
        {phone}
      </p>
      <p>
        <span className="icon">&#9993;</span>
        {email}
      </p>
    </div>
  </div>
  </div>
  </div>
  </div>
)};


export default Location