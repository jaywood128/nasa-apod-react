// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPicture } from '../actions/fetchPicture'
import Picture from '../components/Picture'
import FavoriteToggle from '../components/FavoriteToggle'
import AstronomyVideo from '../components/AstronomyVideo'
import Clock from '../components/Clock'
import Loader from '../components/Loader'
let loading = <h1> Picture loading... </h1> 
// 

class AstronomyPictureContainer extends Component {

  
  componentDidMount() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    let date = yyyy + '-' + mm + '-' + dd; 
   
    if (Object.keys(this.props.pictures.todaysPicture).length === 0 && this.props.pictures.todaysPicture.constructor === Object) {
     console.log("Inside first if statement")
  
      this.props.fetchPicture(this.props.match.params.date)
    }

  
  }
  render() {
    let fakeData
    let picture = this.props.pictures.todaysPicture
   
       if (picture) {
      fakeData = <div className="todaysPicture"> 
     
      { picture.media_type == 'video' ? <AstronomyVideo picture={picture} /> : <Picture picture={picture} /> } 
      
      </div>
    } else {
      fakeData = <h1> Picture Loading! </h1>
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
  fetchPicture: (date)=> dispatch(fetchPicture(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(AstronomyPictureContainer)

