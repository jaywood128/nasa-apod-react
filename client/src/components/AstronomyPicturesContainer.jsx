// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import AstronomyPictures from './AstronomyPictures'
import { connect } from 'react-redux'
import { fetchTodaysPicture } from '../actions/fetchTodaysPicture'
import { fetchLastThirtyDays } from '../actions/fetchLastThirtyDays';

 
class AstronomyPicturesContainer extends Component {
 
  componentDidMount() {
    function formatDate(date) {
      var monthNames = [
        "01", "02", "03",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
    
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
    
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    let date = Date.now()
    debugger
    const todays_picture = this.props.pictures.filter(day => day.date === date);
    if (!todays_picture) {
      this.props.fetchTodaysPicture()
    }
  }

  render() {
    
    return (
      <div>
        AstronomyPicturesList Component
        {/* <AstronomyPictures pictures={this.props.pictures} /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
   
  return { pictures: state.pictures }
}
const mapDispatchToProps = dispatch => ({
  fetchLastThirtyDays: ()=> dispatch(fetchLastThirtyDays()),
  fetchTodaysPicture: ()=> dispatch(fetchTodaysPicture()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(AstronomyPicturesContainer)