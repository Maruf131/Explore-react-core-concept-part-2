import { useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState(11);

  const styles = {
    border: "2px dotted purple",
    borderRadius: "20px",
    marginBottom: "5px",
  };
  // add
  const addPlayers = () => {
    const playerAdd = player + 1;
    setPlayer(playerAdd);
  };
  //reduce
  const reducePlayers = () => {
    setPlayer(player - 1);
  };
  return (
    <div style={styles}>
      <h2>Players :{player}</h2>
      <button onClick={addPlayers}>Add</button>
      <button onClick={reducePlayers}>Reduce</button>
    </div>
  );
}
