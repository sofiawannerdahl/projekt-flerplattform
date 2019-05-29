import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class Joke extends Component {

    render() {
        const jokes = this.props.joke;
        console.log(jokes);

        //const jokeitem = <p>{jokes} </p>;

            return (
                <Card>
                    <Card.Header> FUN Joke. </Card.Header>
                    <Card.Body>
                        <Card.Title>(category) joke</Card.Title>
                        <Card.Text>
                            {jokes}
                        </Card.Text>
                     </Card.Body>
                </Card>

                /*
                <div>
                    {jokeitem}
                </div>
                */
            )
    }
}


export default Joke;
