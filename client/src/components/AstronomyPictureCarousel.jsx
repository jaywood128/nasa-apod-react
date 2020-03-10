import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
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
        return <div className="carousel" id="carousel" key={picture.id}> 
                <img src={ picture.url } />
                <h3> date: {picture.date} </h3> 
                <p className="legend"> {picture.date} {"/n"}{picture.title} {"/n"} Explanation: {picture.explanation} </p> 
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


