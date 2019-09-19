import React from 'react'

class AstronomyVideo extends React.Component {
  
  render() {
    return(
      <div className="video"> 
        <h3> {this.props.picture.picture.title} </h3> 
        <h3> id: {this.props.picture.picture.id} </h3> 
        <h3> date: {this.props.picture.picture.date} </h3> 
        <p> Explanation: {this.props.picture.picture.explanation} </p> 
        <h3> media_type: {this.props.picture.picture.media_type} </h3>
        <video width="400" controls="controls" preload="metadata">
        <source src={`${this.props.picture.picture.url}#t=0.5`}type="video/mp4"/> 
        </video>
      </div>
    )
  }
}
export default AstronomyVideo 