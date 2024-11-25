import { React, useState, useEffect } from "react";

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const games = ["Cricket", "Hockey", "Kabbadi"];
    setGames(games);
  }, []);
  return (
    <div>
      <ul>
        {games.map((game, key) => (
          <li key={key}>{game}</li>
        ))}
      </ul>
    </div>
  );
}
