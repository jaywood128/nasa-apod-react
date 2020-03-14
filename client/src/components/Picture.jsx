import React from 'react';
import FavoriteToggle from './FavoriteToggle'
import AstronomyVideo from './AstronomyVideo'

const Picture = (picture) => {
  const titleStyle ={
    paddingTop: 20,
    fontWeight: 'bold',
  }

  if (picture.picture.media_type === "video") {
    return (
      <AstronomyVideo picture={picture}/> 
      )
  } else {
    return (
      <div className="container" id="astromony-picture-container"> 
        <div className="card" >
          <img src={picture.picture.url} className="card-img-top" ></img>
          <h3 className="card-title" style={titleStyle}> {picture.picture.title} </h3> <FavoriteToggle date={picture.picture.date}/> 
          <h3> Date: {picture.picture.date} </h3> 
          <div className="card-body">
            <p className="card-text"><strong>Description: </strong>{picture.picture.explanation} </p>
          </div>
        </div>
      </div>
    
    )

  }
  
}

export default Picture 
