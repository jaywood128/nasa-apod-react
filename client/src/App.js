import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AstronomyPictureContainer from './components/AstronomyPictureContainer';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
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
                    <Route exact path='/app' render={() => <Redirect to="/astronomy_pictures/today"/>}/> 
                    <Route path='/last_thirty_days' component={AstronomyPicturesLastThirtyDaysContainer}/> 
                    <Route path='/astronomy_pictures/:date' component={AstronomyPictureContainer}/> 
                    {/*this.props.params.date  <Link to="/astronomy_pictures/2019-10-11"></Link> */}
                    {/* <Route component={NoMatch}/>  */}
                  </Switch>
              </Router> 
    );
  }
}


export default App;
