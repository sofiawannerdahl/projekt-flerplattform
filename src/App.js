import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Jokelist from './components/Jokelist';
import F from './components/Form'

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            jokelist: [],
            category: '',
            joke: {}, //nuvarande skämt
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // tar emot från formuläret efter vald kategori
    handleChange(event) {
      this.setState({category: event.target.value});
    }

    // tar emot från formuläret efter submit
    handleSubmit(event) {
     event.preventDefault();
     let category = this.state.category;

     // Kontrollerar vilken kategori användaren valt, och om hen valt en kategori alls
     var url;
     if (category === "All"){
       url = 'https://sv443.net/jokeapi/category/Programming';
     }else if (category === ""){
       alert('You need to choose a category!')
     }else{
       url = `https://sv443.net/jokeapi/category/Programming?blacklistFlags=${category}`;
     }

    // Efter att url:en hämtats och kontrollerar om den hämtats korrekt 
    fetch(url)
     .then(result => {
       return result.json()
     }).then(data => {

      // tar svaret från API:et, slår ihop det med det som finns i this.state.jokelist 
      // sätter sen jokelist till state  
      this.response = data;
      const removeDublicate = [...this.state.jokelist, this.response];
      const jokelist = [...new Set(removeDublicate)];

      this.setState({
        jokelist: jokelist,
      })
      }).catch(error => {
       console.log(error);
     });

   }
   
    
    
    // Dispositionen för komponenterna på webbsidan
    render(){
      return (
        <div>
          <Header/>
          <F value={this.state.category}  handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <Jokelist jokelist={this.state.jokelist}/>
        </div>
      )
    }
}


export default App;
