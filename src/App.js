import React, { Component } from 'react';
import './index.css';
import Header from './Header';
import Jokelist from './Jokelist';


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            jokelist: [],
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
                <Jokelist jokelist={jokes}/>
            </div>
        )
    }
}
export default App;