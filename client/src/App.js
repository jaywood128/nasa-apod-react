import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  HashRouter as Router, 
  Route
} from 'react-router-dom';
import CommentsList from './components/CommentsList';
import NewComment from './components/NewComment';

function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/" component={CommentsList} />
        <Route exact path="/comments/new" component={NewComment} />
      </div>
    </Router> 
  );
}


export default App;
