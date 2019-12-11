import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Simon',
      movie: 'froSimonzen'
    };
    this.shoot = this.shoot.bind(this);
  }

  shoot() {
    this.setState((state) => {
     return {movie: 'Frozen'}
    });
    
  }

  render() {
    return (
      <div>
        <Hello name={this.state.movie} />
        <form>
          <button type="button" id="searchButton" onClick={this.shoot}>
          <i class="material-icons">something</i>
          </button>
	      </form>
      </div>
    );
  }
}






//<Hello name={this.state.name} />

render(<App />, document.getElementById('app'));
