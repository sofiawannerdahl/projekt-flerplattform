import React, { Component } from 'react';


class Header extends Component{
    render() {

        return (
            <header> 
                <h1> FUN jokes. </h1>
            </header>
        )
    }
}

/*

const Header = () => { <header> <h1> Cat Fatcs. </h1></header>
    return (
        <Header />
    )
} 

/*

return(
        <header> <h1> Cat Fatcs. </h1></header>
    )

<header> <h1> Cat Fatcs. </h1></header>
    render( 
        <Header/>
    );

*/

export default Header;