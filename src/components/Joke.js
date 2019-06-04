import React, { Component } from 'react';

export class Joke extends Component {

    render() {
        const jokes = this.props.joke;
        const J = JSON.parse(localStorage.getItem("joke"));

        if(J.length === 0){
            return(
            <div id="joke-container">
                <div id="joke">
                    <p>{jokes} </p>
                </div>
            </div>
        )}else{
          return(
            <div id="joke-container">
              {J.map((text) => {
                return(
                <div key={text.id} id="joke">
                  <p>{text.text}</p> <button className="removeBtn" onClick={this.removeThis} >Remove this joke!</button>
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
