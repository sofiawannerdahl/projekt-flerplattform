import React, { Component } from 'react';
import Joke from './Joke';

class Jokelist extends Component {

    render() {
        const jokelist = this.props.jokelist;
        console.log(jokelist);

        if(jokelist.length === 0){
            this.getJokes();
            return <Joke joke={"Make yourself ready for the funniest programming joke!"}/>
        }else{

            if(jokelist.type === "single"){
                const oneType = this.props.jokelist.joke;
                this.setJoke(jokelist, oneType);
                return <Joke joke={jokelist.joke}/>

            }else {
                const twoType = jokelist.setup + " " + jokelist.delivery
                this.setJoke(jokelist, twoType);
                return <Joke joke={twoType}/>
            }
        }
    }

    getJokes() {
        // Hämtar alla filmer från localStorage
        var jokes = localStorage.getItem("joke");
        console.log(jokes);
        
        // Kontrollera om det finns några filmer i localStorage
        if(jokes == null) {
            // Det finns inget i localStorage, så vi skapar en tom lista där
            localStorage.setItem("joke", JSON.stringify([]));
            // Returnerar en tom lista (= inga filmer)
            return [];
        } else {
            // Returnerar alla filmer i en lista (från JSON => lista med objekt)
            return JSON.parse(jokes);
        }
    }

    setJoke(jokelist, data){
        const jokes = this.getJokes();
        console.log(jokes)
        //const data = this.props.jokelist.joke;
        //localStorage.clear();

        /*
        for (i = 0; i < jokes.length; i++) { 
            const unique = Array.from(...new Set(jokes[i]));
            return unique
        }
        */
        //console.log(unique);
        //console.log("Skämt med samma id försökte läggas till")

        jokes.push({
            id: jokelist.id,
            text: data
        })



        localStorage.setItem("joke", JSON.stringify(jokes));
    };
}

export default Jokelist;
