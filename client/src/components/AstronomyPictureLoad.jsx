import React, { Component }               from 'react';

class AstronomyPictureLoad extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
    }
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
    this.props.fetchTodaysPhoto()
  }

  render() {
    return (
        <p>
          <label htmlFor="comment">Load today's Astro Picture! </label>
          <button name="content" id="" cols="30" rows="10"onClick={this.onClick.bind(this)}></button>
        </p>
    )
  }
}

export default AstronomyPictureLoad