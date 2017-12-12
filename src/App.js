import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    loggedIn: false
  }

  toggleLoggedIn = () => {
    this.setState(prevState => ({
      loggedIn: !this.state.loggedIn
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
        
          <p>Welcome to my website</p>

          <hr />
          <button className={this.state.loggedIn && 'loggedIn'} onClick={this.toggleLoggedIn}>{ this.state.loggedIn ? 'Log out' : 'Log In' }</button>
          <p>{ this.state.loggedIn && 'You are logged in!' }</p>
          <hr />

          <strong>Navigation:</strong>
          <Link to="/">Home</Link> |
          <Link to="/hello">Hello</Link> |
          <Link to="/hello/you">Hello you!</Link> |
          <Link to="/goodbye">Goodbye</Link> |
          <Link to="/contact">Contact</Link>

          <hr />

          <Route exact path="/hello" component={Hello} />
          <Route path="/hello/:name" component={HelloYou} />
          <Route path="/goodbye" component={Goodbye} />
          <Route path="/contact" component={() => {
            if (this.state.loggedIn) {
              //All good, proceed
              return <Contact />
            } else {
              //Kick 'em out
              return <Redirect to="/login" />
            }
          }} />
          <Route path="/login" component={Login} />
          
        </div>
      </Router>
    );
  }
}

const HelloYou = ({ match }) => (
  <p>Hello {match.params.name}</p>
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

const Login = ({ match }) => (
  <p>Tech debt: login form goes here!</p>
)

export default App;
