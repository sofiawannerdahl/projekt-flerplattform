import React, { Component } from 'react';
import Joke from './Joke';

class Jokelist extends Component {

  render() {
    const jokelist = this.props.jokelist;
    console.log(jokelist);

    if(jokelist.length === 0){
      this.getJokes();
      return <Joke joke={"Make yourself ready for the funniest programming joke!"}/>
    }

    for (var i=0; i < jokelist.length; i++){
      console.log(jokelist[i])

    
      if(jokelist[i].type === "single"){
        const oneType = jokelist[i].joke;
        console.log("hej")
        this.setJoke(jokelist[i], oneType);
        return <Joke joke={jokelist[i].joke} clearLocal={this.clearJokes} value = {this.value} removeJoke={this.handleDelete}/>
      }else {
        const twoType = jokelist[i].setup + " " + jokelist[i].delivery
        this.setJoke(jokelist[i], twoType);
        return <Joke joke={twoType} clearLocal={this.clearJokes} value = {this.value} removeJoke={this.handleDelete}/>
      }
    }
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
    const jokes = this.getJokes();

    jokes.push({
        id: joke.id,
        text: data
    })

    localStorage.setItem("joke", JSON.stringify(jokes));
    };

  // remove all items in localStorage and reload the page
  clearJokes(){
    localStorage.clear();
    window.location.reload();
  }

  handleDelete(event){

    var chosenJoke = event.target.value;  
    console.log(chosenJoke); //ID:et på skämtet man har klickat på skrivs ut här

    var jokes = JSON.parse(localStorage.getItem("joke"));
    
    //var newJokes = jokes.filter(joke => joke.id !== chosenJoke); VILL FÅ DEN HÄR ATT FUNGERA!

    for (var i=0; i < jokes.length; i++){
      var jokeID = jokes[i].id;
      if (jokeID == chosenJoke){
        jokes.splice(i, 1);
      }
    }
    localStorage.setItem("joke", JSON.stringify(jokes));
  
    /*
    const deleteJoke = jokes.filter(function(joke) {
      return joke.id === event.target.value;
    });
    localStorage.removeItem(deleteJoke);
    */

  }


}

export default Jokelist;
