import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class A extends Component {
    render() {

      return (
        <div className="App">
          <App/>
        </div>
      )
    }
  }

ReactDOM.render(<A />, document.getElementById('root'))
