import React from 'react'
class SearchByDate extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {query: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    
    event.preventDefault()
    this.props.fetchSearchByDatePicture(this.state.query)
    this.setState({
      query: '',
    });
  }

  handleChange =(event) => {
    debugger
    this.setState({
      query: event.target.value 
    })
  }

  render() {
    return (

      // <div className="mx-auto"> 
      //   <label>Search Pictures by Date (YYYY-MM-DD)</label>
      //     <div className="col-xs-3 text-right">
            <div> 
              <form onSubmit={this.handleSubmit} className="form-inline"> 
                <input  type="text" value={this.state.query} onChange={this.handleChange}/>
            </form>
             {this.state.query}
           </div>
        // </div>
    )
  }
}
export default SearchByDate 