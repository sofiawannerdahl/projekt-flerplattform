import React, { Component } from 'react';
import './index.css';
import Header from './Header';
import Jokelist from './Jokelist';
<<<<<<< HEAD
import F from './components/Form.js'
=======
>>>>>>> 5fa8b61b48292632869abdda3000d0d7df2ca16d

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            jokelist: [],
<<<<<<< HEAD
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
     let category = this.state.category;

     if (category == "All"){
       var url = 'https://sv443.net/jokeapi/category/Programming';
     }else if (category == ""){
       alert('You need to choose a category!')
     }else{
       var url = `https://sv443.net/jokeapi/category/Programming?blacklistFlags=${category}`;
     }

     fetch(url)
     .then(result => {
       return result.json()
     })
     .then(jokelist => {
       this.setState({
       jokelist: jokelist,
      })
     })
     .catch(error => {
       console.log(error);
     });
    }

    render(){
        const jokes = this.state.jokelist;
        return (
            <div>
                <Header/>
                <F value={this.state.category}  onSubmitValue={this.handleSubmit} handleChange={this.handleChange}/>
=======
        }
        //console.log(this.state.jokelist);
    }

    componentDidMount() {
        let url = 'https://sv443.net/jokeapi/category/Programming';
        fetch(url)
        .then(result => {
            return result.json()
        })
        .then(jokelist => {
            this.setState({
                jokelist: jokelist,
            })
        })
        .catch(error => {
            console.log(error);
        });
    }


    render(){
        const jokes = this.state.jokelist;

        console.log(jokes);
        return (
            <div>
                <Header/>
>>>>>>> 5fa8b61b48292632869abdda3000d0d7df2ca16d
                <Jokelist jokelist={jokes}/>
            </div>
        )
    }
}
<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 5fa8b61b48292632869abdda3000d0d7df2ca16d
