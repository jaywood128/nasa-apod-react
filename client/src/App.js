import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AstronomyPictureContainer from './components/AstronomyPictureContainer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AstronomyPicturesLastThirtyDaysContainer from './components/AstronomyPicturesLastThirtyDaysContainer'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layouts';
import { NavigationBar } from './components/NavigationBar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment/> 
          <Layout/> 
            <Router>
              <NavigationBar/>
              <Switch> 
                <Route exact path='/' component={AstronomyPictureContainer }/> 
                  <Route path='/last_thirty_days' component={AstronomyPicturesLastThirtyDaysContainer}/> 
                  {/* <Route component={NoMatch}/>  */}
              </Switch>
            </Router>
        <React.Fragment /> 
      </div>
    );
  }
}


export default App;
