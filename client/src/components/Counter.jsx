import React from 'react'; 

class Counter extends React.Component { 
constructor() {
  super()
  this.state = {count: 0}
}

handleClick = () => {
  // this.setState({ count: this.state.count += 1 })
  console.log('a')
  fetch('/api/v1/loadfjkdlsfjlkdsfd8')
      .then(resp => {
        console.log('b')
        return resp.json()
      })
      .then(pictures => {
        console.log('c', pictures)
        // dispatch({ type: 'FETCH_LAST_THIRTY_DAYS', pictures })
      })
      .catch(error => console.log('d', error))
  console.log('e')

      // a e b d
}

  render() {
    return <button onClick={this.handleClick}> ClickMe </button>
  }

}

export default Counter 