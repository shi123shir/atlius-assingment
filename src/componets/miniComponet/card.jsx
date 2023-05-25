import React from 'react'

const Card = ({imgSrc, imgName}) => {
  return (
    <div className="card">
    <img
      src={imgSrc}
      alt=""
      width={"280rem"}
    />
    <div className="image-describe">
    <h2>{imgName}</h2>
    </div>
  </div>
  )
}

export default Card