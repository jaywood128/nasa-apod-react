import React from 'react'
import AstronomyPictureCarousel from './AstronomyPictureCarousel'

const CarouselWrapper = (props) => {
  
  
    return(<div className="top-level"> 
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <AstronomyPictureCarousel pictures={props.pictures}></AstronomyPictureCarousel>
               </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div> 
      )
}

export default CarouselWrapper