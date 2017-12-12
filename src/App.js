import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <p>Welcome to my website</p>

          <strong>Navigation:</strong>
          <Link to="/">Home</Link> |
          <Link to="/hello">Hello</Link> |
          <Link to="/goodbye">Goodbye</Link> |
          <Link to="/hello/you">Hello you!</Link>

          <hr />

          <Route path="/hello/you" component={HelloYou} />
          <Route exact path="/hello" component={Hello} />
          <Route path="/goodbye" component={Goodbye} />
          <Route path="/contact" component={Contact} />
          
          
        </div>
      </Router>
    );
  }
}

const HelloYou = () => (
  <p>Hello You!</p>
)

const Hello = () => (
  <p>Hello World!</p>
)

const Goodbye = () => (
  <p>Goodbye World!</p>
)

const Contact = () => (
  <div>
    <h1>Contact me!</h1>
    <p>test@testies.com</p>
  </div>
)

export default App;
