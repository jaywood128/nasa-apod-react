import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AstronomyPicturesContainer from './components/AstronomyPicturesContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
         <AstronomyPicturesContainer /> 
      </div>
    );
  }
}


export default App;
