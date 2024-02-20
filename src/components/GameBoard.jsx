import GameOver from "./GameOver";

export default function GameBoard({onChoose,turns,reset,Board}){
    // const [currentboard,setcurrent]=useState(board);
    // function update(row,column){
    //     if(currentboard[row][column]==null){
    //         setcurrent((prevboard)=>{
    //         const copyboard=[... prevboard.map((col)=>([...col]))]
    //         copyboard[row][column]=activePlayersymbol;
    //         return copyboard;
    //         })
    //         onChoose();
    //     }
    // }
    let currentBoard=[...Board.map((col)=>([...col]))];
    // console.log(Board);
    for(const turn of turns){
        currentBoard[turn.Square.row][turn.Square.col]=turn.player;
    }
    return(
        <>        <ol id="game-board">
            {
                currentBoard.map((row,rowindex)=>(
                    <li key={rowindex}>
                        <ol>
                            {
                                row.map((playerSymbol,colindex)=>(
                                    <li key={colindex}>
                                        <button onClick={()=>onChoose(rowindex,colindex)}>{playerSymbol}</button>
                                    </li>
                                ))
                            }
                        </ol>
                    </li>
                ))
            }
        </ol>
        <GameOver  currentboard={currentBoard} Turn={turns} resetf={reset}/>
        </>

        
    )
}