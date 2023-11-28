import { useState, useEffect} from "react";
import Player from "./Player";

function PlayerList(){
    const [players, setPlayers] = useState([]);
    const jsonData = [];
    useEffect(() => {
        const requestPlayers = {
            method: "GET",
        };
        fetch('https://jsonplaceholder.typicode.com/users',requestPlayers)
        .then(response => response.json())
        .then(data => setPlayers(data))
    }, []);
    console.log(players);
    return(
        <>
        <h1>Lista de Jugadores</h1>
        <div className="container">
        <div className="row">    
        {
            players.map((player)=>
                <Player 
                name={player.name}
                // key={player.id}
                // username={player.username}
                // mail={player.email}
                // phone={player.phone}
                // website={player.website}
                // company={player.company}
                />
            
            )
        }
        </div>
        </div>
        </>
    );
}
export default PlayerList;