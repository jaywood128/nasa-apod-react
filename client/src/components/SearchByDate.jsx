import React from 'react'

class SearchByDate extends React.Component { 
  
    state = {
      searchByDate: ''
    }

  handleSubmit = (event) => {
    let date = this.state 
    event.preventDefault()
    this.props.fetchSearchByDatePicture(date)
    this.setState({
      searchByDate: '',
    });
  }

  handleChange =(event) => {
    this.setState({
      searchByDate: event.target.value 
    })
  }

  render() {
    return (
      <div> 
        <form onSubmit={ event => this.handleSubmit(event)}> 
        <input
          type="text"
          value={this.state.searchDate}
          onChange={this.handleChange}
        />
        </form>
      </div>
    )
  }
}
export default SearchByDate 