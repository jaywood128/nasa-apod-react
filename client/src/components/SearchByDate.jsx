import React from 'react'
import './SearchByDate.css'
class SearchByDate extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {query: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    
    event.preventDefault()
   console.log(this.props)
   if (!this.state.query) return 
    this.props.fetchSearchedPicture(this.state.query)
    this.setState({
      query: ''
    });
  }

  render() {
    return (

          <div className="container"> 
              <form onSubmit={this.handleSubmit} className="form-inline"> 
                <input  type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
              </form>
          </div>
        
    )
  }
}
export default SearchByDate 