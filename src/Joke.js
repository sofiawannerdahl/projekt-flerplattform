import React, {Component} from 'react';

export class Joke extends Component {
    
    render() {
        const facts = this.props.fact;
        console.log(facts); 

        const factitem =  <p> {facts} </p>;

            return (
                <div>
                    {factitem}
                </div>
            )
    }
}


export default Joke;