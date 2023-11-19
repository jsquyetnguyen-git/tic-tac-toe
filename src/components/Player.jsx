import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditting, setIsEditting] = useState(false);

    const handleEditClick = () => {
        setIsEditting(!isEditting);
        console.info(isEditting);
    }

    return (
        <li>
            <span className="player-info">
                <span className="player-name">{name}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick = {handleEditClick}>Edit</button>
        </li>
    )
}