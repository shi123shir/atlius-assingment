import React from "react";
import "./style.css";
import Card from "../miniComponet/card";
import arr from "../../assets/data"

function Services() {
  let box = document.querySelector(".all-fig");
  const btnpressprev = () => {
      
      let width = box.clientWidth;
     
      box.scrollLeft = box.scrollLeft - width;
  }

  const btnpressnext = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
  }

  return (
    <div className="ser-container" id="spcial">
      <div className="image-container">
        <div className="spcial-head">
          <h2>Our World-Class Specialties</h2>
        </div>
        <div className="all-fig">
          <div> 
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
            </div>
           {arr.map((x) => <div><Card  imgSrc = {x.img}  imgName={x.name} /></div>)}
      </div>
    </div>
    </div>
  );
}

export default Services;
