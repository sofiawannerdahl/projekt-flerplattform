import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class Joke extends Component {
<<<<<<< HEAD

    render() {
        const jokes = this.props.joke;
        console.log(jokes);
=======
    
    render() {
        const jokes = this.props.joke;
        console.log(jokes); 
>>>>>>> 5fa8b61b48292632869abdda3000d0d7df2ca16d

        //const jokeitem = <p>{jokes} </p>;

            return (
                <Card>
                    <Card.Header> FUN Joke. </Card.Header>
                    <Card.Body>
<<<<<<< HEAD
                        <Card.Title>(category) joke</Card.Title>
                        <Card.Text>
                            {jokes}
                        </Card.Text>
=======
                        <Card.Title>(categori) joke</Card.Title>
                        <Card.Text>
                            {jokes}
                        </Card.Text>
                        <Button variant="primary">Get another joke!</Button>
>>>>>>> 5fa8b61b48292632869abdda3000d0d7df2ca16d
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


<<<<<<< HEAD
export default Joke;
=======
export default Joke;
>>>>>>> 5fa8b61b48292632869abdda3000d0d7df2ca16d
