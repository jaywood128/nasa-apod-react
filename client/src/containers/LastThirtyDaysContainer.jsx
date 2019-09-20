import React from 'react'
import { fetchLastThirtyDays } from '../actions/fetchLastThirtyDays';
import { connect } from 'react-redux';
import AstronomyPictureCarousel from '../components/AstronomyPictureCarousel'

class LastThirtyDaysContainer extends  React.Component{
  
  componentDidMount() {   
   
    if (this.props.pictures.pictures.length === 0) {
      console.log(this.props)
      this.props.fetchLastThirtyDays()
    }
  }
  
  render () {
    const pictures = this.props.pictures.pictures
   return(
     <div> 
      { 
        (pictures.length !== 0) ? 
          <AstronomyPictureCarousel pictures={pictures} />
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

export default connect(mapStateToProps, mapDispatchToProps)(LastThirtyDaysContainer)