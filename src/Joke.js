import React, { Component } from 'react';

export class Joke extends Component {

    render() {
        const jokes = this.props.joke;
        console.log(jokes);
        //const jokeitem = <p>{jokes} </p>;

            return (
                <div id="joke-container">
                    <div id="joke">
                        <p>
                            {jokes}
                        </p>
                     </div>
                </div>
            )
    }
}


export default Joke;
