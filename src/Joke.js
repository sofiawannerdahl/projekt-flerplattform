import React, { Component } from 'react';

export class Joke extends Component {

    render() {
        const jokes = this.props.joke;
        const J = JSON.parse(localStorage.getItem("joke"));
        console.log(J);

        // om localStroage är tom så kommer en dafault text skrivas ut
        if(J.length === 0){
            return(
            <div id="joke-container">
                <div id="joke">
                    <p>{jokes} </p>
                </div>
            </div>
        )}else{
            // loopar igenom localStorage och skriver ut texten för varje skämt
            return(
                <div id="joke-container">
                    {J.map((text, i) => {
                        return(
                        <div key={i} id="joke">
                            <p>{text.text}</p>
                        </div>
                        )
                    })}
                </div>
            )
        }
    }
}


export default Joke;
