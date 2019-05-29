import React, { Component } from 'react';
import Joke from './Joke';

class Jokelist extends Component {
    render() {

        const jokelist = this.props.jokelist;
        console.log(jokelist)

        if(jokelist.type === "single"){
            this.setJoke();
            return <Joke joke={jokelist.joke} />

        }else {

            const twoType = jokelist.setup + " " + jokelist.delivery
            this.setJoke();
            return <Joke joke={twoType} />
        }

    }

    setJoke(){
        const data = this.props.jokelist.joke;
        //localStorage.clear();
        localStorage.setItem("joke", data);
    };
}

//  getJoke(){
//     var jokeData = localStorage.getItem("data");
//    }}

export default Jokelist;
