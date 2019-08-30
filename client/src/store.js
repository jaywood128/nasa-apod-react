import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  pictureReducer  from './reducers/pictureReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pictures: pictureReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(
   rootReducer, 
   composeEnchancer(applyMiddleware(thunk))
   );
  export default store 