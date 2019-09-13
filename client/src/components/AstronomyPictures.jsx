import React from 'react';
import Picture from './Picture'
import AstronomyPictureCarousel from './AstronomyPictureCarousel'
class AstronomyPictures extends React.Component {

  render() { 
      const AstronomyPicturesList = this.props.pictures.map((picture, index) => {
        return (
          <AstronomyPictureCarousel 
          picture={picture} 
          key={index}
          /> )
      }) 
    return (
      <ul> 
        {AstronomyPicturesList}
      </ul>
    )
  }
}
export default AstronomyPictures

