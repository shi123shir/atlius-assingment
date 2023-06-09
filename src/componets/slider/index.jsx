import React from "react";
import "./style.css";
import Card from "../miniComponet/card";
import arr from "../../assets/data"


function Services() {
  let box = document.querySelector(".allFig");
  const btnpressprev = () => {
      
      let width = box.clientWidth;
       console.log(width)
      box.scrollLeft = box.scrollLeft - width || 1243;
  }

  const btnpressnext = () => {
      let width = box.clientWidth;
      console.log(width)
      box.scrollLeft = box.scrollLeft + width || 1243;
  }

  return (
    <div className="ser-container" id="spcial">
      <div className="image-container">
        <div className="spcial-head">
          <h2>Our World-Class Specialties</h2>
        </div>
        <div className="allFig">
          <div> 
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
            </div>
           {arr.map((x,id) => <div><Card  imgSrc = {x.img}  imgName={x.name} key={id} /></div>)}
      </div>
  
    </div>
    </div>
  );
}

export default Services;
