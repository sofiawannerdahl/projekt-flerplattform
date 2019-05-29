import React, {Component} from 'react';
import Joke from './Joke';

class Jokelist extends Component {
    render() {

        const factlist = this.props.factlist;
        console.log(factlist)

        if(factlist.type === "single"){
            this.setJoke();
            return <Joke fact={factlist.joke} />

        }else {

            const twoType = factlist.setup + " " + factlist.delivery
            this.setJoke();
            return <Joke fact={twoType} />
        }

    }

    setJoke(){
        const data = this.props.factlist.joke; 
        //localStorage.clear();
        localStorage.setItem("joke", data);
    }
}

export default Jokelist;