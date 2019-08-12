import React, { Component } from 'react';
import Joke from './Joke';

class Jokelist extends Component {

  render() {
    const jokelist = this.props.jokelist;
    console.log(jokelist);
    this.handleDelete = this.handleDelete.bind(this);

    if(jokelist.length === 0){
        this.getJokes();
        return <Joke joke={"Make yourself ready for the funniest programming joke!"}/>
    }else if(jokelist.type === "single"){
      const oneType = this.props.jokelist.joke;
      this.setJoke(jokelist, oneType);
      return <Joke joke={jokelist.joke} clearLocal={this.clearJokes} value = {this.value} removeJoke={this.handleDelete}/>
    }else {
      const twoType = jokelist.setup + " " + jokelist.delivery
      this.setJoke(jokelist, twoType);
      return <Joke joke={twoType} clearLocal={this.clearJokes} value = {this.value} removeJoke={this.handleDelete}/>
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


  setJoke(jokelist, data){
    const jokes = this.getJokes();

    jokes.push({
        id: jokelist.id,
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
    /* HUR får vi med så att text.id från Joke skickas med hit? så att den fattar vilken som ska tas bort?? 
    likt onClick=remove(this) ?? */
    
    console.log(event.target.value);
    var jokes = localStorage.getItem("joke");

    const deleteJoke = jokes.filter(function(joke) {
      return joke.id === event.target.value;
    });
      
    localStorage.removeItem(deleteJoke);
  }


}

export default Jokelist;
