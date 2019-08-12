import React, { Component } from 'react';

export class Joke extends Component {

  render() {
    const jokes = this.props.joke;
    const J = JSON.parse(localStorage.getItem("joke"));
    console.log(J);

    if(J.length === 0){
      return(
      <div id="joke-container">
          <div id="joke">
              <p>{jokes} </p>
          </div>
      </div>
    )}else{
      return(
        <div id="joke-container" value={this.props.value} onClick={() => this.props.removeJoke(this.value)}>
          {J.map((text) => {
            return(
            <div key={text.id+1} id="joke">
              <p>{text.text}</p> <button className="removeBtn" value={text.id} >Remove this joke!</button>
            </div>
            )
          })}

          <button className="removeBtn" onClick={this.props.clearLocal}>Clear all jokes!</button>
        </div>
        )
      }
    }
  }


export default Joke;
