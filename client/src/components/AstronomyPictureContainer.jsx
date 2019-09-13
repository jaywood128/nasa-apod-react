// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import AstronomyPictures from './AstronomyPictures'
import { connect } from 'react-redux'
import { fetchTodaysPicture } from '../actions/fetchTodaysPicture'
import { fetchSearchByDatePicture } from '../actions/fetchSearchByDatePicture'
import SearchByDate from './SearchByDate'
import Picture from './Picture'

class AstronomyPictureContainer extends Component {
  constructor(props) {
    super()
  }
  
  componentDidMount() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    let todays_date = yyyy + '-' + mm + '-' + dd; 
    // const todays_picture = this.props.pictures.pictures.filter(day => day.date === todays_date);
    debugger 
    if (Object.keys(this.props.pictures.todaysPicture).length === 0 && this.props.pictures.todaysPicture.constructor === Object) {
      this.props.fetchTodaysPicture()
    }
    // if (this.props.pictures.pictures.length === 0) {
    //   this.props.fetchLastThirtyDays()
    // }
  }
  render() {
    let fakeData
    if (this.props.pictures.todaysPicture !== null && Object.keys(this.props.pictures.todaysPicture).length === 0 && this.props.pictures.todaysPicture.constructor === Object) {
      fakeData = <h1> Picture Loading! </h1>
    }
    else {
      fakeData = <div className="todaysPicture"> 
        <SearchByDate fetchSearchByDatePicture={this.props.fetchSearchByDatePicture} /> 
        <Picture picture={this.props.pictures.todaysPicture} />
  
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
  fetchTodaysPicture: ()=> dispatch(fetchTodaysPicture()), 
  fetchSearchByDatePicture: ()=> dispatch(fetchSearchByDatePicture())
})

export default connect(mapStateToProps, mapDispatchToProps)(AstronomyPictureContainer)