import React from 'react'

class FavoriteToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFavorited: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isFavorited: !prevState.isFavorited
    }));
  }

  render() {
   
    return (
        <div> 
          <h1> HEART!</h1>
      <button onClick={this.handleClick}>
        {/* {this.state.isFavorited ? (<i className="fas fa-star"></i>) : (<i className="far fa-star"></i>)} */}
        <i className="fas fa-heart"></i>
      </button>
        </div> 
    );
  }
}
export default FavoriteToggle