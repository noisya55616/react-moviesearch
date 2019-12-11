import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
          <h1>Movie Search</h1>
        <p>
          Welcome to our site. Very work in progress.
        </p>
        
        <img src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1568441068934"></img>
      </div>
    );
  }
}

//<Hello name={this.state.name} />

render(<App />, document.getElementById('root'));
