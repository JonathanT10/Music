import React from 'react';
import './musicTable.css';



function musicTable(props){
    let music = props.mData
    return(
       <table className="center">
       <caption>Your music</caption>
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
       
       {music.map(music => (
           <tr key={music.id}>
           <td>{music.title}</td>
           <td>{music.album}</td>
           <td>{music.artist}</td>
           <td>{music.genre}</td>
           <td>{music.releaseDate}</td>
           </tr>
       ))}
       </tbody>
   </table>

    )
}

export default musicTable;

