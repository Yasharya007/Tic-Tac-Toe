import { playerinfo } from "./Playerinfo";
export default function GameOver({currentboard,Turn,resetf}){
    let winner=null;
    let winnercontent=null;
    if(currentboard[0][0]!==null && currentboard[0][1]!==null && currentboard[0][2]!==null && currentboard[1][0]!==null && currentboard[1][1]!==null && currentboard[1][2]!==null && currentboard[2][0]!==null && currentboard[2][1]!==null && currentboard[2][2]!==null){
        winner="It's a tie breaker !"
        winnercontent=<div id="game-over">
        <h2>Game over</h2>
        <p>{winner}</p>
        <button onClick={resetf}>Rematch</button>
    </div>;
    }   
    if(Turn.length!=0){
        if((currentboard[0][0]===currentboard[0][1] && currentboard[0][1]===currentboard[0][2] &&currentboard[0][0]!==null)||(currentboard[1][0]===currentboard[1][1] && currentboard[1][1]===currentboard[1][2] &&currentboard[1][0]!==null)||(currentboard[2][0]===currentboard[2][1] && currentboard[2][1]===currentboard[2][2] &&currentboard[2][0]!==null)||(currentboard[0][0]===currentboard[1][0] && currentboard[1][0]===currentboard[2][0] &&currentboard[0][0]!==null)||(currentboard[0][1]===currentboard[1][1] && currentboard[1][1]===currentboard[2][1] &&currentboard[0][1]!==null)||(currentboard[0][2]===currentboard[1][2] && currentboard[1][2]===currentboard[2][2] &&currentboard[0][2]!==null)||(currentboard[0][0]===currentboard[1][1] && currentboard[1][1]===currentboard[2][2] &&currentboard[0][0]!==null)||(currentboard[0][2]===currentboard[1][1] && currentboard[1][1]===currentboard[2][0] &&currentboard[0][2]!==null)){
        console.log({Turn});
        let sy=Turn[0].player;
        winner=playerinfo[sy];
        winnercontent=<div id="game-over">
        <h2>winner!</h2>
        <p>{winner}</p>
        <button onClick={resetf}>Rematch</button>
    </div>;
    }
    }
    
    return(
        <div>{winnercontent}</div>
    )
}