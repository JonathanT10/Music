import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import MusicTable from './musicTable/musicTable';
import './app.css';
import NavBar from './NavBar/navBar';


class App extends Component {
    constructor(props){
        super(props);

    }

    state = { }
    render(){
        return(
            <div>
                <h1>Music Library</h1>
                <h3><NavBar /></h3> 
               <h2><SearchBar /></h2> 
               
                <MusicTable />
                
            </div>
        )
    }
}

export default App;