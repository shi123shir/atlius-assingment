import React from 'react'
import "./style.css"

const Ytvideo = ({videolink}) => {
  return (
    <div className="yt-con">
    <iframe  frameBorder="0" allowFullScreen="1"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="A Miracle At Altius Hospitals | Lil Feet | Triplets | IVF | Altius Fertility Treatments #shorts" 
     width="640" height="360" src={`${videolink}?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Faltiushospital.com&amp;widgetid=1`} data-gtm-yt-inspected-13="true" data-gtm-yt-inspected-17="true"></iframe>
    </div>
  )
}

export default Ytvideo