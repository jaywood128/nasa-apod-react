// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import AstronomyPictures from './AstronomyPictures'
import { connect } from 'react-redux'
import { fetchPicture } from '../actions/fetchPicture'
 
class AstronomyPicturesContainer extends Component {

  state = {
    pictures: []
  }

  componentDidMount() {
    
    this.props.fetchPicture()
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
function mapDispatchToProps(dispatch) {
  return { fetchPicture: () => dispatch({action: 'FETCH_PICTURE', payload})
}
}
function mapStateToProps(state) {
  return { pictures: state.pictures }
}

export default connect(mapStateToProps, mapDispatchToProps)(AstronomyPicturesContainer)