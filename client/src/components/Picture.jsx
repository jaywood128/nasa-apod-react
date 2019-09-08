import React from 'react';

const Picture = (picture) => {
  if (picture.picture.media_type === "video") {
    return (
      <div className="video"> 
        <h3> {picture.picture.title} </h3> 
        <h3> id: {picture.picture.id} </h3> 
        <h3> date: {picture.picture.date} </h3> 
        <p> Explanation: {picture.picture.explanation} </p> 
        <h3> media_type: {picture.picture.media_type} </h3>
        <video width="400" controls="controls" preload="metadata">
        <source src={`${picture.picture.url}#t=0.5`}type="video/mp4"/> 
        </video>
      </div> 
      )
  } else {
    return (
      <div className="picture"> 
        <h3> {picture.picture.title} </h3> 
        <h3> id: {picture.picture.id} </h3> 
        <h3> date: {picture.picture.date} </h3> 
        <p> Explanation: {picture.picture.explanation} </p> 
        <a href ={picture.picture.hdurl}> </a>
        <h3> media_type: {picture.picture.media_type} </h3>
        <img src={ picture.picture.url } />
      </div> 
      )

  }
  
}

export default Picture 
