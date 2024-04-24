import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Ye",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "yoh" } });
    console.log(game);
  };

  return (
    <div>
      <button onClick={handleClick}>Game</button>
    </div>
  );
}

export default App;
