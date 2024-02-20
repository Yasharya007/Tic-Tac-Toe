import { playerinfo } from "./Playerinfo"
export default function Log({turns}){

    return(
        <ol id="log">
            {
                turns.map((turn)=>(
                    <li key={`${turn.Square.row}${turn.Square.col}`}>{playerinfo[turn.player]} selected {turn.Square.row},{turn.Square.col}</li>
                ))
            }
        </ol>
    )
}