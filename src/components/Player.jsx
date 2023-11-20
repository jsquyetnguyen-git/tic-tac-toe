import { useState } from "react";

function Player({ name, symbol, isActive }) {
  const [isEditting, setIsEditting] = useState(false);
  const [nameInput, setNameInput] = useState(name);

  const handleEditClick = () => {
    setIsEditting((isEditting) => !isEditting);
  };

  const handleInput = (e) => {
    setNameInput(e.target.value);
  };

  let playerName = <span className="player-name">{nameInput}</span>;

  if (isEditting) {
    playerName = (
      <input type="text" onChange={handleInput} required value={nameInput} />
    );
  }

  return (
    <li className = {isActive? "active":undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditting ? "Edit" : "Save"}</button>
    </li>
  );
}

export default Player;
