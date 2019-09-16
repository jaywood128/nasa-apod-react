import React from 'react'
import { fetchLastThirtyDays } from '../actions/fetchLastThirtyDays';
import { connect } from 'react-redux';
import AstronomyPictureCarousel from './AstronomyPictureCarousel'

class AstronomyPicturesLastThirtyDaysContainer extends  React.Component{
  
  componentDidMount() {   
   
    if (this.props.pictures.pictures.length === 0) {
      console.log(this.props)
      this.props.fetchLastThirtyDays()
    }
  }
  
  render () {
   return(
     <div> 
      { 
        (this.props.pictures.pictures.length !== 0) ? 
          <AstronomyPictureCarousel pictures={this.props.pictures.pictures} />
        : <h3> Loading Carousel </h3>
      }
     </div>
   )
  }
}
const mapDispatchToProps = dispatch => ({
  fetchLastThirtyDays: ()=> dispatch(fetchLastThirtyDays())
})

function mapStateToProps(state) {
  return {pictures: state.pictures}
}

export default connect(mapStateToProps, mapDispatchToProps)(AstronomyPicturesLastThirtyDaysContainer)