import React from 'react';
import "./style.css";
import FromData from "../miniComponet/fromData"

const Main = () => {
  return (
    <main>
        <div className='appoitment' id= "appoint">
          <div className='container'>
        <div className='right-half'>
        <h2 className='first-heading'>Bangalore's Most Trusted Fertility Hospital.</h2>
        <p>Providing World-class Treatments With 1,00,000+ Successful Procedures Making Your Dream of Parenthood a Reality.</p>
        <h2 className='second-heading'>Your First Fertility Consultation Will Be FREE</h2>
        </div>
        <div>
           <FromData />
        </div>
        </div>  
        </div>
        </main>
  )
}

export default Main