import { useState } from "react"
import { playerinfo } from "./Playerinfo";
export default function Player({name,symbol,isactive}){
    const [isEditing,setEditing]=useState(false);
    const[finalname,setname]=useState(name);
    let content= <span className="player-name">{finalname}</span>
    let buttoncontent="Edit";
    function changecontent(){
        setEditing((editing)=>!editing);
    }
    function changename(event){
        setname(event.target.value);
    }
    if(symbol==='X')playerinfo['X']=finalname;
    else playerinfo['0']=finalname;
    if(isEditing){
        content=<input type="text" required value={finalname} onChange={changename} />;
        buttoncontent="Set"
    }
    return(
        <li className={isactive?"active":undefined}>
            <span className="player">
              {content}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={changecontent}>{buttoncontent}</button>
          </li>
    )
}