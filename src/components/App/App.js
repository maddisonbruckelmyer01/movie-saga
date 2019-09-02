import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Genres from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Movies}/>
        <Route path='/details' component={Genres}/>
        <Route path='/edit' component={Edit}/>
      </div>
    </Router>
    )
  }
}

export default App;
