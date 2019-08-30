// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import AstronomyPictures from './AstronomyPictures'
import { connect } from 'react-redux'
import { fetchTodaysPicture } from '../actions/fetchTodaysPicture'

 
class AstronomyPicturesContainer extends Component {
 
  componentDidMount() {
    
    this.props.fetchTodaysPicture()
  }

  render() {
    debugger
    return (
      <div>
        AstronomyPicturesList Component
        <AstronomyPictures pictures={this.props.pictures} />
      </div>
    )
  }
}
// function mapDispatchToProps(dispatch) {
//   return { fetchTodaysPicture: (payload) => dispatch({action: 'FETCH_TODAYS_PICTURE', type: payload  })
// }
// }
function mapStateToProps(state) {

  return { pictures: state.pictures.pictures }
}

export default connect(mapStateToProps, {fetchTodaysPicture})(AstronomyPicturesContainer)