import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'styles!css!react-responsive-carousel/lib/styles/main.css';
// // carousel styles
// import 'style!css!react-responsive-carousel/lib/styles/carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 const AstronomyPictureCarousel = (props) => { 
   const generatePictures = () => {
   return  props.pictures[0].map(picture => { 
      
      if (picture.media_type === "video") {
        return  <div key={picture.id}>
          <iframe width="560" height="315" src="{`${picture.url}#t=0.5`}" />
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
   
  // if (picture.media_type === "video") {
  //   return( 
  //     <Carousel>
  //     <video width="400" controls="controls" preload="metadata">
  //     <source src={`${picture.url}#t=0.5`}type="video/mp4"/> 
  //       </video>
  //       <p> Explanation: {picture.explanation} </p> 
  //     </Carousel>
  //   )
  //   } else {
  //     debugger
  //     return (
      
  //     )
  //   }

  }
export default AstronomyPictureCarousel


