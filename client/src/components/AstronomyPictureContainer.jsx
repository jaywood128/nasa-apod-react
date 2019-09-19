// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import AstronomyPictures from './AstronomyPictures'
import { connect } from 'react-redux'
import { fetchPicture } from '../actions/fetchPicture'
import Picture from './Picture'
import FavoriteToggle from './FavoriteToggle'
import AstronomyVideo from './AstronomyVideo'

class AstronomyPictureContainer extends Component {
  constructor(props) {
    super()
  }
  
  componentDidMount() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    let date = yyyy + '-' + mm + '-' + dd; 
    // const todays_picture = this.props.pictures.pictures.filter(day => day.date === todays_date);
   
    if (Object.keys(this.props.pictures.todaysPicture).length === 0 && this.props.pictures.todaysPicture.constructor === Object) {
  
      this.props.fetchPicture(this.props.match.params.date)
    }
  
  }
  render() {
    let picture = this.props.pictures.todaysPicture
    let fakeData
    if (picture !== null && Object.keys(picture).length === 0 && picture.constructor === Object) {
      fakeData = <h1> Picture Loading! </h1>
    }
    else {
      fakeData = <div className="todaysPicture"> 
      { picture.media_type == 'video' ? <AstronomyVideo picture={picture} /> : <Picture picture={picture} /> }
      </div>
    }
      
    return (
      <div>
        {fakeData}
      </div>
    )
  }
}

function mapStateToProps(state) {
   
  return { pictures: state.pictures }
}
const mapDispatchToProps = dispatch => ({
  fetchPicture: (date)=> dispatch(fetchPicture(date)), 
  fetchSearchByDatePicture: ()=> dispatch(fetchSearchByDatePicture())
})

export default connect(mapStateToProps, mapDispatchToProps)(AstronomyPictureContainer)