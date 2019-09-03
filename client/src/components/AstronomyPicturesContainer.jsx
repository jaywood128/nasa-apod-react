// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import AstronomyPictures from './AstronomyPictures'
import { connect } from 'react-redux'
import { fetchTodaysPicture } from '../actions/fetchTodaysPicture'
import { fetchLastThirtyDays } from '../actions/fetchLastThirtyDays';

 
class AstronomyPicturesContainer extends Component {
 
  componentDidMount() {
    
    this.props.fetchLastThirtyDays()
  }

  render() {

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
const mapDispatchToProps = dispatch => ({
  fetchLastThirtyDays: ()=> dispatch(fetchLastThirtyDays()),
  fetchTodaysPicture: ()=> dispatch(fetchTodaysPicture()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(AstronomyPicturesContainer)