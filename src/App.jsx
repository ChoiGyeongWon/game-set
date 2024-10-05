import React, { useState } from "react";

import GameRoot from "./components/Game/GameRoot.jsx";
import GameReady from "./components/Game/GameReady.jsx";
import GameStart from "./components/Game/GameStart.jsx";
import GameEnd from "./components/Game/GameEnd.jsx";

export default function App() {
  const [gameState, setGameState] = useState("ready"); // ready -> start -> end

  let content;

  function changeGameState(state) {
    setGameState(state);
  }

  switch (gameState) {
    case "ready":
      content = <GameStart />;
      break;
      case "start":
      content = <GameReady changeGameState={changeGameState} />;
      break;
    case "start":
      content = <GameEnd />;
      break;
  }

  return <GameRoot>{content}</GameRoot>;
}
