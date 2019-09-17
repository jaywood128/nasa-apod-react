import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AstronomyPictureContainer from './components/AstronomyPictureContainer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AstronomyPicturesLastThirtyDaysContainer from './components/AstronomyPicturesLastThirtyDaysContainer'
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import { NoMatch } from './NoMatch';
import { Layout } from './components/Layouts';
import { NavigationBar } from './components/NavigationBar';
import { Fragment } from 'react'
import { Navbar } from './components/Layouts/Navbar'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeart } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee, farHeart, faHeart)

class App extends Component {
  render() {
    return (
            <Router>
                <Navbar/>
                  <Switch> 
                    {/* <Route exact path='/app' component={AstronomyPictureContainer }/>  */}
                    <Route path='/last_thirty_days' component={AstronomyPicturesLastThirtyDaysContainer}/> 
                    <Route path='/astronomy_pictures/:id' component={AstronomyPictureContainer}/> 
                    {/* <Route component={NoMatch}/>  */}
                  </Switch>
              </Router> 
    );
  }
}


export default App;
