import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import AstronomyPictureContainer from './components/AstronomyPictureContainer'
import AstronomyPicturesLastThirtyDaysContainer from './components/AstronomyPicturesLastThirtyDaysContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import rootReducer from './reducers/index.js'
import 'bootstrap/dist/css/bootstrap.min.css';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancer(applyMiddleware(thunk, logger))
)
ReactDOM.render(
  <Provider store={store}> 
    <Router>
       <div>
        {/* <nav>
          <ul>
            <li> 
              <Link to='/'
            </li>
              <li>
                <Link to="/last_thirty_days">See the Past 30 Days</Link>
              </li>
            </ul>
        </nav> */} 
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        <Route exact path="/app" component={App} />,
        <Route path="/last_thirty_days" component={AstronomyPicturesLastThirtyDaysContainer} /> 
      </div> 
    </Router>
  </Provider>, 
  document.getElementById('root')
);

