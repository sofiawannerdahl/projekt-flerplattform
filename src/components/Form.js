import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

class F extends Component{

  render(){
    return(
      <Form onSubmit={this.props.onSubmitValue}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose category of programming joke</Form.Label>
          <Form.Control as="select" value={this.props.value} onChange={this.props.handleChange}>
            <option value="">Select category </option>
            <option value="All">All</option>
            <option value="NSFW">Not safe for work</option>
            <option value="Religious">Religious</option>
            <option value="Political">Political</option>
          </Form.Control>
          <Button variant="primary" type="submit" value="Submit">Get joke!</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default F;
