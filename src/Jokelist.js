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
<<<<<<< HEAD
        const data = this.props.jokelist.joke;
        //localStorage.clear();
        localStorage.setItem("joke", data);
    }
/*
    getJoke(){
      var jokeData = localStorage.getItem("data");
    }
}
*/
export default Jokelist;
=======
        const data = this.props.jokelist.joke; 
        //localStorage.clear();
        localStorage.setItem("joke", data);
    }
}

export default Jokelist;
>>>>>>> 5fa8b61b48292632869abdda3000d0d7df2ca16d
