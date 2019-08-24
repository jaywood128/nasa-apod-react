// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import AstronomyPictures from './AstronomyPictures'
class AstronomyPicturesContainer extends Component {

  state = {
    pictures: []
  }

  componentDidMount() {
    debugger
    fetch('/api/v1/astronomy_pictures', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    }
    )
      .then(astronomyPictures => astronomyPictures .json())
      .then(astronomyPictures  => {
        console.log(astronomyPictures)
        // this.setState({
        //   pictures : astronomyPictures 
        // })
      })
  }

  renderPictures = () => {
   return  <AstronomyPictures pictures={this.state.pictures} fetchPhotos={this.fetchPhotos} /> 
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