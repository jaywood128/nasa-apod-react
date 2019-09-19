import React, { Component } from 'react'
import SearchByDate from '../components/SearchByDate'

class SearchByDateContainer extends Component {

  state = {
    result: []
  }

  render() {
    return(
      <div>
        <SearchByDate fetchSearchByDatePicture={this.fetchSearchByDatePicture} />
      </div>
    )
  }

  fetchSearchByDatePicture = (date) => {
    return (dispatch) => {
      debugger
      dispatch({type: "PICTURE_LOADING" })
      return fetch(`/api/v1/astronomy_pictures/${date}`)
        .then(response => response.json)
        .then( picture => this.setState({result: [...picture]}))
        .catch( error => console.log(error))
    }
  }

  componentDidMount() {
    this.fetchSearchByDatePicture()
  }
}

export default SearchByDateContainer