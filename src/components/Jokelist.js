import React, { Component } from 'react';
import Joke from './Joke';

class Jokelist extends Component {

  render() { 
    const jokelist = this.props.jokelist;
    
    // om jokelist är tom, kolla localStorge och skriv ut stängen nedan
    if (jokelist.length === 0){
      this.getJokes();
      return <Joke joke={"Make yourself ready for the funniest programming joke!"}/>

    } else {
      // ta sista skämtet i listan - det sist tillagda
      const joke = (jokelist.slice(-1)[0]);

      if(joke.type === "single"){
        var jokeText = joke.joke;
      }else{
        var jokeText = joke.setup + " " + joke.delivery
        }

      this.setJoke(joke.id, jokeText);
      return <Joke joke={jokeText} clearLocal={this.clearJokes} value = {this.value} removeJoke={this.handleDelete}/>
      };
    }


  getJokes() {
    // Hämtar alla skämt från localStorage
    var jokes = localStorage.getItem("joke");

    // Kontrollera om det finns några skämt i localStorage
    if(jokes == null) {
      // Det finns inget i localStorage, så vi skapar en tom lista
      localStorage.setItem("joke", JSON.stringify([]));
      // Returnerar en tom lista (= inga skämt)
      return [];
    } else {
      // Returnerar alla skämt i en lista (från JSON => lista med objekt)
      return JSON.parse(jokes);
    }
  }


  setJoke(joke, data){
    //hämta det som finns i localStorage
    const jokes = this.getJokes();
    
    const findId = (element) => element.id === joke;
    const found = jokes.some(findId);

    // första gången ett skämt läggs till
    if (jokes === null){ 
      jokes.push({
        id: joke,
        text: data
      })
      localStorage.setItem("joke", JSON.stringify(jokes));

    // om skämtet inte finns i localStorage redan, lägg till det - för att motverka dubliketter
    }else if (found === false){
      jokes.push({
        id: joke,
        text: data
      })
      localStorage.setItem("joke", JSON.stringify(jokes));
    }else{
        console.log("Skämtet fanns redan i localStorage")
    } 
  }; 


  // tar bort allt som finns i loclStorage och laddar om sidan för att tömma den
  clearJokes(){
    localStorage.clear();
    window.location.reload();
  }


  handleDelete(event){
    let chosenJoke = event.target.value;  
    console.log(chosenJoke); //ID:et på skämtet man har klickat på 

    let jokes = JSON.parse(localStorage.getItem("joke"));

    // tar bort alla UTOM det valda skämtet? Vad är fel??
    var newJokes = jokes.filter(function(joke){
      return chosenJoke.indexOf(joke.id) > -1;
    });

    console.log(newJokes);

    localStorage.setItem("joke", JSON.stringify(newJokes));
  }

}

export default Jokelist;
