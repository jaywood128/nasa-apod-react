import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'styles!css!react-responsive-carousel/lib/styles/main.css';
// // carousel styles
import 'style!css!react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';

 const AstronomyPictureCarousel = (picture) => { 
  if (picture.picture.media_type === "video") {
    return( 
      <Carousel>
      <video width="400" controls="controls" preload="metadata">
      <source src={`${picture.picture.url}#t=0.5`}type="video/mp4"/> 
        </video>
      </Carousel>
    )

  }
} 
export default AstronomyPictureCarousel


