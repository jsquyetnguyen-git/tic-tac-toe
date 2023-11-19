import { useState } from "react";

function Player({name, symbol}) {

    const [isEditting, setIsEditting] = useState(false);

    const handleEditClick = () => {
        setIsEditting(true);
        console.info(isEditting);
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditting) {
        playerName = <input type="text" required/>
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick = {handleEditClick}>{!isEditting? "Edit":"Ok"}</button>
        </li>
    )
}

export default Player;
 