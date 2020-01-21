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
        const oneType = joke.joke;
        console.log(joke.id + oneType);
        this.setJoke(joke.id, oneType);
        return <Joke joke={joke.joke} clearLocal={this.clearJokes} value = {this.value} removeJoke={this.handleDelete}/>
      
      } else {
          const twoType = joke.setup + " " + joke.delivery
          console.log(joke.id + twoType);
          this.setJoke(joke.id, twoType);
          return <Joke joke={twoType} clearLocal={this.clearJokes} value = {this.value} removeJoke={this.handleDelete}/>
        }
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
    const newJokes = jokes.splice(jokes.findIndex(e => e.id === chosenJoke),1);
    console.log(newJokes);

    localStorage.setItem("joke", JSON.stringify(newJokes));

    /*
    // vill hita vilken plats skämtet har i listan på localStorage och ta bort det - FUNKAR EJ (än)
    const findId = (element) => element.id === chosenJoke;
    const found = jokes.findIndex(findId); //vilken plats i listan som skämtet har i localStorage
    console.log(found);
    localStorage.removeItem(jokes[found]); //ska tydligen kunna tas bort såhär
  */

    /*
    //var newJokes = jokes.filter(joke => joke.id !== chosenJoke); VILL FÅ DEN HÄR ATT FUNGERA!

    for (var i=0; i < jokes.length; i++){
      var jokeID = jokes[i].id;
      if (jokeID === chosenJoke){
        jokes.splice(i, 1);
      }
    }
    localStorage.setItem("joke", JSON.stringify(jokes));
    */

  }


}

export default Jokelist;
