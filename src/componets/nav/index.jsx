import React from 'react'
import homeLogo from "../../assets/cropped-Altius-05-300x190.png"
import "./style.css"
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <header className='head-container'>
        <nav>
          <div className='nav-bar'>

            <section>
            <div className='image-bar'>
              <img src={homeLogo} alt="logo" width={"115px"} />
            </div>
            </section>
           <section>
           <div className='mid-nav'>
             <ul>
              <li>
              <Link  to="test" spy={true} smooth={true} offset={50} duration={500}> About Us
              
              </Link>
              </li>
              <li>
              <Link to = "spcial" spy={true} smooth={true} offset={50} duration={500}>Specialities</Link>
             
              </li>
              <li>
              <Link to="testmo" spy={true} smooth={true} offset={50} duration={500} >Testimonial</Link>
            
              </li>
              <li>
              <Link to= "doctor" spy={true} smooth={true} offset={50} duration={500} >Doctorview</Link>
              
              </li>
              <li>
              <Link to ="location" spy={true} smooth={true} offset={50} duration={500}>Location</Link>
             
              </li>
              <li>
              <Link to = "Ivf" spy={true} smooth={true} offset={50} duration={500}>IVF</Link>
            
              </li>
             </ul>
            </div>
           </section>
              <section>
                <div className='left-bar'>
                <div> <Link to='appoint' spy={true} smooth={true} offset={50} duration={500} className='text-alin'><span>Get in touch</span></Link></div> 
                <div> <a href="tel:8882799799" className='text-alin'> <span > Call 8882799799 </span></a></div> 
            </div>
            </section>
            </div>
        </nav>
    </header>
  )
}

export default Nav





// const Nav = () => {
//   return (
//     <header className='head-container'>
//         <nav>
//           <div className='nav-bar'>

//             <section>
//             <div className='image-bar'>
//               <img src={homeLogo} alt="logo" width={"115px"} />
//             </div>
//             </section>
//            <section>
//            <div className='mid-nav'>
//              <ul>
//               <li>
//               <a href="test" > About Us
//               <i className='arrow down'></i>
//               </a>
//               </li>
//               <li>
//               <a href="#">Specialities</a>
//               <i className='arrow down'></i>
//               </li>
//               <li>
//               <a href="#">Care Services</a>
//               <i className='arrow down'></i>
//               </li>
//               <li>
//               <a href="#">Value Adds</a>
//               <i className='arrow down'></i>
//               </li>
//               <li>
//               <a href="#">Location</a>
//               <i className='arrow down'></i>
//               </li>
//               <li>
//               <a href="#">Resources</a>
//               <i className='arrow down'></i>
//               </li>
//              </ul>
//             </div>
//            </section>
//               <section>
//                 <div className='left-bar'>
//                 <div> <a className='text-alin'><span>Get in touch</span></a></div> 
//                 <div> <a href="" className='text-alin'> <span > Call 123456789 </span></a></div> 
//             </div>
//             </section>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Nav