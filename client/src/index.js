import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import AstronomyPicturesContainer from './components/AstronomyPicturesContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers/index.js'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)
)
ReactDOM.render(
  <Provider store={store}> 
  <App/> 
    {/* <Router>
      <Route path="/" component={App} /> 
    </Router> */}
  </Provider>, 
  document.getElementById('root')
);

