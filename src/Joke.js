import React, {Component} from 'react';

export class Joke extends Component {
    
    render() {
        const jokes = this.props.joke;
        console.log(jokes); 

        const jokeitem =  <p> {jokes} </p>;

            return (
                <div>
                    {jokeitem}
                </div>
            )
    }
}


export default Joke;