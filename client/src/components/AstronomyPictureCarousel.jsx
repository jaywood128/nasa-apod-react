import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 const AstronomyPictureCarousel = (props) => { 
   const generatePictures = () => {
   return  props.pictures[0].map(picture => { 
      
      if (picture.media_type === "video") {
        debugger 
        return <div key={picture.id}>
                 <iframe width="560" height="315" src="{`${picture.url}`}" />
                 <p className="legend"> Explanation: {picture.explanation} </p>  
              </div>
      } else {
        return <div key={picture.id}> 
                <img src={ picture.url } />
                <h3> date: {picture.date} </h3> 
                 <p className="legend"> {picture.date} {"/n"}{picture.title} {"/n"} Explanation: {picture.explanation} </p> 
                 {/* <a href ={picture.hdurl}> </a>
                 <h3> media_type: {picture.media_type} </h3> */}
                </div> 
      }

    })
   }
   return ( 
     <Carousel dynamicHeight> 
       <h1>Inside Carousel!</h1>  
       {generatePictures()} 
     </Carousel>
   )
   
  
  }
export default AstronomyPictureCarousel


