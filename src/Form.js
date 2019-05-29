import {Form, Button} from 'react-bootstrap';
import React, {Component} from 'react';

class F extends Component{
  render() {
    return(
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose category of joke</Form.Label>
          <Form.Control as="select">
            <option value="">select</option>
            <option value="all">Allt</option>
            <option value="political">political</option>
            <option value="religious">religious</option>
          </Form.Control>
        </Form.Group>
          <Button variant="info" size="lg">Get Cat-smart</Button>
      </Form>
    )
  }
}

export default F;