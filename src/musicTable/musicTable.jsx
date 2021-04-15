import React, { Component } from 'react';
import axios from 'axios';



     let music = axios.get("http://www.devcodecampmusiclibrary.com/api/music").then(data =>console.log(data)).catch()
    

 class MusicTable extends Component {   
    
    async apiCall(){
    
        try{
            let music = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
            console.log(music.data);
            let mData = [];
            mData.push(music.data);
            render(mData); {

                return(
                <table>
                        <caption>Our music</caption>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Release Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mData.map(mData => (
                            <tr key={mData.id}>
                            <td>{mData.title}</td>
                            <td>{mData.album}</td>
                            <td>{mData.artist}</td>
                            <td>{mData.genre}</td>
                            <td>{mData.releaseDate}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                );
            }
         }
      
   
     catch(err){
            console.log(err);
     }
    // return mData;
    }

    
 
}

    // function MusicTable (mData) {
    //     const { music } = mData;
    //     return (
    //     <table>
    //         <caption>Our music</caption>
    //         <thead>
    //         <tr>
    //             <th>Title</th>
    //             <th>Album</th>
    //             <th>Artist</th>
    //             <th>Genre</th>
    //             <th>Release Date</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         {music.map(music => (
    //             <tr key={music.id}>
    //             <td>{music.title}</td>
    //             <td>{music.album}</td>
    //             <td>{music.artist}</td>
    //             <td>{music.genre}</td>
    //             <td>{music.releaseDate}</td>
    //             </tr>
    //         ))}
    //         </tbody>
    //     </table>
    //     );
    //     }


        // apiCall();
        // MusicTable(mData);


 

 export default MusicTable;



