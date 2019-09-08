import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AstronomyPictureContainer from './components/AstronomyPictureContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
         <AstronomyPictureContainer /> 
      </div>
    );
  }
}


export default App;
