import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { useState } from "react"
const board=[
  [null,null,null],
  [null,null,null],
  [null,null,null],
];
function App() {
  const[gameturns,setgameturns]=useState([]);
  let activePlayer='X';
  function handleState(rowI,column){
    for(const turn of gameturns){
      if(turn.Square.row==rowI && turn.Square.col==column){
      return;
      }
    }

    setgameturns((prevturns)=>{
      activePlayer='X';
      if(prevturns.length>0 && prevturns[0].player==='X'){
        activePlayer='0';
      }
      const updatedturns=[
        {Square:{row:rowI,col:column},player:activePlayer},
        ...prevturns
      ];
      return updatedturns;
    })
  }
  function restart(){
    setgameturns([])
    console.log("Done")
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X" isactive={(gameturns.length==0)||gameturns[0].player==='0'?true:false}/>
          <Player name="Player2" symbol="0" isactive={!(gameturns.length==0)&& gameturns[0].player==='X'?true:false}/>
        </ol>

        <GameBoard onChoose={handleState} turns={gameturns} reset={restart} Board={board}/>
      </div>
      <Log turns={gameturns}/>
    </main>
  )
}

export default App
