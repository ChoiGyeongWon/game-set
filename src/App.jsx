import React, { useState } from "react";

import GameRoot from "./components/Game/GameRoot.jsx";
import GameReady from "./components/Game/GameReady.jsx";
import GameStart from "./components/Game/GameStart.jsx";
import GameEnd from "./components/Game/GameEnd.jsx";

export default function App() {
  const [gameState, setGameState] = useState("ready"); // ready -> start -> end
  const [idx, setIdx] = useState(0);

  function addIdx() {
    setIdx((prev) => ++prev);
  }

  let content;

  function changeGameState(state) {
    setGameState(state);
  }

  switch (gameState) {
    case "ready":
      content = <GameReady changeGameState={changeGameState} />;
      break;
    case "start":
      content = (
        <GameStart
          changeGameState={changeGameState}
          addIdx={addIdx}
          key={idx}
        />
      );
      break;
    case "end":
      content = <GameEnd changeGameState={changeGameState} />;
      break;
  }

  return <GameRoot>{content}</GameRoot>;
}
