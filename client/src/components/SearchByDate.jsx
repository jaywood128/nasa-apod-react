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

      // <div className="mx-auto"> 
      //   <label>Search Pictures by Date (YYYY-MM-DD)</label>
      //     <div className="col-xs-3 text-right">
            <div className="search-by-date"> 
              <form onSubmit={this.handleSubmit} className="form-inline"> 
                <input  type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
            </form>
           </div>
        // </div>
    )
  }
}
export default SearchByDate 