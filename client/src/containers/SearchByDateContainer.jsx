import React, { Component } from 'react'
import SearchByDate from '../components/SearchByDate'
import Picture from '../components/Picture'
import AstronomyVideo from '../components/AstronomyVideo'
import { connect } from 'react-redux'
import { fetchSearchedPicture } from '../actions/fetchSearchedPicture'

const VideoOrPicture = (picture) => ( picture.media_type === 'video' ? <AstronomyVideo picture={picture} /> : <Picture picture={picture} /> )

class SearchByDateContainer extends Component {


  render() {
    
    
    const result = (Object.keys(this.props.result).length !== 0 ) ? VideoOrPicture(this.props.result) : null 

     
    return(
      <div className="container">
        <br></br>
        <br></br>
        <label>Search by Date (YYYY-MM-DD)</label>
        <br></br>
        <br></br>
          <SearchByDate fetchSearchedPicture={this.props.fetchSearchedPicture} />
        {result}
      </div>
    )
  }
}
function mapStateToProps(state) {

  return { result: state.pictures.result }
}
const mapDispatchToProps = dispatch => ({
  fetchSearchedPicture: (date)=> dispatch(fetchSearchedPicture(date)), 
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchByDateContainer)