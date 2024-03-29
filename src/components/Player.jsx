import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function HandleNameChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    // WHEN THE BUTTON IS CLICKED IT WILL BE TRUE
    // setIsEditing(!isEditing) = if true = false and vice versa
    // setIsEditing(isEditing ? false : true) = ternary expression
    // setIsEditing(true);
    setIsEditing((editing) => !editing); // arr function with a givin parameter to initiate the state of the editing user
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    // = True
    editPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={HandleNameChange}
      />
    ); // = ask to change the name and the value is entered
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
