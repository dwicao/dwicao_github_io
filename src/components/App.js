import React, { Component } from 'react';
import NavLink from './NavLink';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <span className="icn-logo"><i className="material-icons">folder_open</i></span>
          <ul className="main-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>       
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;