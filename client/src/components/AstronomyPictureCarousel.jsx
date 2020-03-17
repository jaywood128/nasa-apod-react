import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 const AstronomyPictureCarousel = (props) => { 
   const generatePictures = () => {
   return  props.pictures[0].map(picture => { 
      
      if (picture.media_type === "video") {
       
        return <div className="carousel" id="carousel" key={picture.id}>
                 <iframe width="560" height="315" src="{`${picture.url}`}" />
                 <p className="legend"> Explanation: {picture.explanation} </p>  
               </div>
      } else {
        return <div className="carousel" id="carousel" key={picture.id} id="astromony-picture-container"> 
                  <img src={ picture.url } />
                  <p className="legend"> Date: {picture.date} </p> 
                  <p className="legend">{picture.title}</p>
                  <p className="legend">Explanation: {picture.explanation} </p> 
                </div> 
      }

    })
   }
   return ( 
     <Carousel dynamicHeight> 
       {generatePictures()} 
     </Carousel>
   )
   
  
  }
export default AstronomyPictureCarousel


