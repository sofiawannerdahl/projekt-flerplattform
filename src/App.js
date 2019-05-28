import React, {Component} from 'react';
import './index.css';
import Header from './components/Header';
import Factlist from './components/Factlist';
import Fact from './components/Fact';
import Form from './components/Form';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
