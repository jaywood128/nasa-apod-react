// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'

class AstronomyPicturesContainer extends Component {

  state = {
    pictures: []
  }

  fetchPhotos() {
    fetch('/api/v1/astronomy_pictures')
      .then(astronomyPictures => astronomyPictures .json())
      .then(astronomyPictures  => {
        this.setState({
          pictures : astronomyPictures 
        })
      })
  }

  renderPictures = () => {
   return  <AstronomyPicture pictures={this.state.pictures} fetchPhotos={this.fetchPhotos} /> 
  }

  render() {
    return (
      <div>
        AstronomyPicturesList Component
        {this.renderPictures()}
      </div>
    )
  }
}

export default AstronomyPicturesContainer