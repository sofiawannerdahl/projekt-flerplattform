import React, {Component} from 'react';

class F extends Component{

  render(){
    return(
      <form onSubmit={this.props.onSubmitValue}>
          <h3>Choose category of programming joke</h3>
            <select id="id-select" value={this.props.value} onChange={this.props.handleChange}>
              <option value="">Select category </option>
              <option value="All">Random</option>
              <option value="NSFW">Not safe for work</option>
              <option value="Religious">Religious</option>
              <option value="Political">Political</option>
            </select>
          <button type="submit" value="Submit">Get joke!</button>
      </form>
    )
  }
}

export default F;
