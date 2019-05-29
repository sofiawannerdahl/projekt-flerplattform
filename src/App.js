import React, {Component} from 'react';
import './index.css';
import Header from './Header';
import Jokelist from './Factlist';


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            factlist: [],
        }
        //console.log(this.state.factlist);
    }

    componentDidMount() {
        let url = 'https://sv443.net/jokeapi/category/Programming';
        fetch(url)
        .then(result => {
            return result.json()
        })
        .then(factlist => {
            this.setState({
                factlist: factlist,
            })
        })
        .catch(error => {
            console.log(error);
        });
    }


    render(){
        const facts = this.state.factlist;

        console.log(facts);
        return (
            <div>
                <Header/>
                <Jokelist factlist={facts}/>
            </div>
        )
    }
}
export default App;