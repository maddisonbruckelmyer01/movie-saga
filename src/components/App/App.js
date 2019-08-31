import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Genres from '../Genres/Genres';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Movies}/>
        <Route path='/genres' component={Genres}/>
      </div>
    </Router>
    )
  }
}

export default App;
