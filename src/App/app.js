import React, { Component } from 'react';
import SearchBar from '../searchBar/searchBar';
import MusicTable from '../musicTable/musicTable';
import './app.css';
import NavBar from '../NavBar/navBar';
import axios from 'axios';

// async function apiCall(){
//     try{
//         let result = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
//    let music = [];
//    music.push(result.data);
//     return music;
//     }
//     catch(err){
//         console.log(err);
//     }
// }return music;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        music: [],
        searching: ''

        }

    }

  async  componentDidMount(){
            let result = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
            this.setState({
                music: result.data
            })
        }


    searchMusic = (event) =>{
        this.setState({
            searching: event.target.value.toLowerCase()
        }); 
        console.log(this.state.searching)
    }
        

    render(){
        const filterSearch = this.state.music.filter(song => {
            return song.title.toLowerCase().includes(this.state.searching)
        })
        console.log(filterSearch);
        return(
            <div>
                <h1>Music Library</h1>
                <h3><NavBar /></h3> 
               <h2><SearchBar searchMusic={this.searchMusic} /></h2> 
               
                <MusicTable mData={filterSearch} />
                
            </div>
        )
    }
}

export default App;