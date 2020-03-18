import React from 'react';
import ReactDOM from 'react-dom';
import CarouselWrapper from './CarouselWrapper'
// import "react-responsive-carousel/lib/styles/carousel.css";
// import { Carousel } from 'react-responsive-carousel';

 const AstronomyPictureCarousel = (props) => { 
   const generatePictures = () => {
   return  props.pictures[0].map((picture, index) => {  
      // if (picture.media_type === "video") {
       
      //   return <div className="carousel" id="carousel" key={picture.id}>
      //            <iframe width="560" height="315" src="{`${picture.url}`}" />
      //            <p className="legend"> Explanation: {picture.explanation} </p>  
      //          </div>
      // } else {
        if( index === 0 ){
          return <div className="carousel-item active" key={picture.id}>
                <img src={picture.url}  alt={picture.title}/>
                <div className="carousel-caption d-none d-md-block">
                  <h5 >{picture.title}</h5>
                  <p>Explanation: {picture.explanation} </p>
                </div>
              </div>

        } else {
          return <div className="carousel-item" key={picture.id}>
                <img src={picture.url}  alt={picture.title}/>
                <div className="carousel-caption d-none d-md-block">
                  <h5 >{picture.title}</h5>
                  <p>Explanation: {picture.explanation} </p>
                </div>
              </div>
        }
      }
  //  }
    )
   }
   return ( 
     <>
     {generatePictures()}
     </>
   )
   
  
  }
export default AstronomyPictureCarousel


