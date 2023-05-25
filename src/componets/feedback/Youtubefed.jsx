import React from "react";
import "../feedback/style.css";
import Ytvideo from "../miniComponet/Ytvideo";

const Youtubefed = () => {
  return (
    <div className="feed-back" id="testmo">
      <div className="data-wrap">
        <h2>See How We're Turning Your Hopes Into Your Bundles Of Joy</h2>
        <div className="video-container">
        <Ytvideo videolink={"https://www.youtube.com/embed/Bjwt8aroCHM"} />
        <Ytvideo videolink={"https://www.youtube.com/embed/4jzB_JZ9WKM"} />
        </div>
        <div className="video-container">
        <Ytvideo  videolink={"https://www.youtube.com/embed/srN4ONny2AE"}/>
        <Ytvideo videolink={"https://www.youtube.com/embed/Wkyu4tk0PG0"} />
        </div>
      </div>
    </div>
  );
};

export default Youtubefed;
