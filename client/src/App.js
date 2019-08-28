import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  HashRouter as Router, 
  Route
} from 'react-router-dom';
import AstronomyPicturesContainer from './components/AstronomyPicturesContainer';


function App() {
  return (
    <div className="App">
    <Router>
        <Route exact path="/" component={AstronomyPicturesContainer} />
        {/* <Route exact path="/api/v1/astronomy_pictures" component={AstronomyPictureSearch} /> */}
       {/* <AstronomyPicturesContainer />  */}
    </Router> 
    </div>
  );
}


export default App;
