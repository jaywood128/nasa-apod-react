// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import AstronomyPictures from './AstronomyPictures'
import { connect } from 'react-redux'
import { fetchTodaysPicture } from '../actions/fetchTodaysPicture'
 import AstronomyPictureLoad from './AstronomyPictureLoad'
 
class AstronomyPicturesContainer extends Component {
  constructor() {
  super()
  this.state = {
    pictures: []
  }
  }
  componentDidMount() {
    
    this.props.fetchTodaysPicture()
  }

  renderPictures = () => {
   
   return  <AstronomyPictures pictures={this.state.pictures} /> 
  }

  render() {
    return (
      <div>
        AstronomyPicturesList Component
        {this.renderPictures()}
        <AstronomyPictureLoad /> 
      </div>
    )
  }
}
// function mapDispatchToProps(dispatch) {
//   return { fetchTodaysPicture: (payload) => dispatch({action: 'FETCH_TODAYS_PICTURE', type: payload  })
// }
// }
function mapStateToProps(state) {
  debugger
  return { pictures: state.pictures }
}

export default connect(mapStateToProps, {fetchTodaysPicture})(AstronomyPicturesContainer)