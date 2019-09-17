import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchAddAstronomyPictureToFavorites } from './fetchAddAstronomyPictureToFavorites'
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
    }))
    let date = this.props.date  
  fetchAddAstronomyPictureToFavorites(date)
  
  }

  render() {
   
    return (
        <div> 
      <button onClick={this.handleClick}>
        {this.state.isFavorited ? <FontAwesomeIcon onClick={this.handleClick} size="2x" icon={['fa', 'heart']} color="#ffd700"/> : <FontAwesomeIcon size="2x" icon={['far', 'heart']} color="#ffd700" />  }
      </button>
        </div> 
    );
  }
}
export default FavoriteToggle