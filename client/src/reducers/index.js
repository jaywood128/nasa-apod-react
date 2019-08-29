import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import AstronomyPicturesContainer from '../components/AstronomyPicturesContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 import { combineReducers } from "redux";
import  pictureReducer  from './pictureReducer'
// import commentsReducer from './reducers/commentsReducer'
const rootReducer = combineReducers({
  pictures: pictureReducer
});
 

 const store = createStore(
   rootReducer, 
   applyMiddleware(thunk, logger),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <Route path="/" component={App} /> 
    </Router>
  </Provider>, 
  document.getElementById('root')
);

