import React, { Component } from 'react';
import './index.css';
import Header from './Header';
import Jokelist from './Jokelist';
import F from './components/Form'

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            jokelist: [],
            category: '',
            /*url: ''*/
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({category: event.target.value});
    }

    handleSubmit(event) {
     //alert(this.state.category);
     event.preventDefault();
     console.log("hej");
     let category = this.state.category;
     console.log("hejjjjj")

     if (category === "All"){
       var url = 'https://sv443.net/jokeapi/category/Programming';
     }else if (category === ""){
       alert('You need to choose a category!')
     }else{
       var url = `https://sv443.net/jokeapi/category/Programming?blacklistFlags=${category}`;
     }

    console.log(url)

    fetch(url)
     .then(result => {
       return result.json()
     }).then(jokelist => {
       this.setState({
        jokelist: jokelist,
      })
     }).catch(error => {
       console.log(error);
     });
    }
    
    render(){
        console.log("sttttttkk");

        const jokes = this.state.jokelist;
        console.log(jokes)
        return (
            <div>
                <Header/>
                <F value={this.state.category}  onSubmitValue={this.handleSubmit} handleChange={this.handleChange}/>
                <Jokelist jokelist={jokes}/>
            </div>
        )
    }
}


export default App;
