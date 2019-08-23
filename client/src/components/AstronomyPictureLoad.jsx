import React, { Component }               from 'react';

class AstronomyPictureLoad extends Component {

  state = {
    date: '',
  }

  handleChange = e => {
    let newValue = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: newValue
    });
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.fetchPhotos()
  }

  render() {
    return (
        <p>
          <label htmlFor="comment">Load the last 30 days of APOD images </label>
          <button name="content" id="" cols="30" rows="10"onSubmit={this.onClick.bind(this)}></button>
        </p>
    )
  }
}

export default AstronomyPictureLoad