import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import pictureReducer from './reducers/pictureReducer';
import AstronomyPicturesContainer from './components/AstronomyPicturesContainer'
const store = createStore(pictureReducer, applyMiddleware(thunk, logger),);
import { BrowserRouter as Router, Route } from 'react-router-dom';
 

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <Route path="/" component={AstronomyPicturesContainer} /> 
    </Router>
  </Provider>, 
  document.getElementById('root')
);

