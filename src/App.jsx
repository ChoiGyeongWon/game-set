import React, { useState, useRef, useEffect } from "react";

import GameRoot from "./components/Game/GameRoot.jsx";
import GameReady from "./components/Game/GameReady.jsx";
import GameStart from "./components/Game/GameStart.jsx";
import GameEnd from "./components/Game/GameEnd.jsx";

import getCards from "./util/cardData.js";
import { findSet } from "./util/set";

const selectValues = [900, 1800, 2700, 3600];
const defaultSelectValue = selectValues[selectValues.length - 1];
const allCardLength =
  getCards().initTwelveCards.length + getCards().initRestCards.length;
const exampleSetCards = findSet(getCards().initTwelveCards);

export default function App() {
  const [gameState, setGameState] = useState("ready"); // ready -> start -> end
  const [selectValue, setSelectValue] = useState(defaultSelectValue);
  const [gameIdx, setgameIdx] = useState(0);
  const [endTime, setEndTime] = useState();
  const [restCardLength, setRestCardLength] = useState(0);

  const endTimeRef = useRef(defaultSelectValue);

  useEffect(() => {
    if (gameState === "end") {
      setEndTime(endTimeRef.current - 1);
    }
  }, [gameState]);

  function getRestCardLength(restCards, boardCards) {
    setRestCardLength(restCards.length + boardCards.length);
  }

  function changeGameIdx() {
    setgameIdx((prev) => ++prev);
  }

  function timeEnd(time) {
    setEndTime(time);
  }

  function handleChangeSelect(e) {
    setSelectValue(e.target.value);
  }

  let content;

  function changeGameState(state) {
    setGameState(state);
  }

  switch (gameState) {
    case "ready":
      content = (
        <GameReady
          changeGameState={changeGameState}
          handleChangeSelect={handleChangeSelect}
          selectValue={selectValue}
          selectValues={selectValues}
          exampleSetCards={exampleSetCards}
        />
      );
      break;
    case "start":
      content = (
        <GameStart
          key={gameIdx}
          changeGameState={changeGameState}
          selectValue={selectValue}
          timeEnd={timeEnd}
          changeGameIdx={changeGameIdx}
          getRestCardLength={getRestCardLength}
          gameState={gameState}
          endTimeRef={endTimeRef}
        />
      );
      break;
    case "end":
      content = (
        <GameEnd
          changeGameState={changeGameState}
          endTime={selectValue - endTime}
          restCardLength={restCardLength}
          allCardLength={allCardLength}
        />
      );
      break;
  }

  return <GameRoot>{content}</GameRoot>;
}
