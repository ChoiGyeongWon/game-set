import { useState, useEffect } from "react";

import styled from "styled-components";

import GameHeader from "./GameHeader";
import GameBoard from "./GameBoard";
import GameFooter from "./GameFooter";

import getCards from "../../util/cardData.js";
import { findSet } from "../../util/set";

const StartBox = styled.section`
  max-width: 800px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--size-padding);
  gap: 10px;

  .gameBoard {
    height: 100%;
  }
`;

export default function GameStart({
  changeGameState,
  selectValue,
  timeEnd,
  changeGameIdx,
  getRestCardLength,
  gameState,
  endTimeRef,
}) {
  const [boardCards, setBoardCards] = useState(getCards().initTwelveCards);
  const [restCards, setRestCards] = useState(getCards().initRestCards);
  const [hintId, setHintId] = useState(null);

  useEffect(() => {
    // 보드의 카드에 세트 유무 확인, 있다면 변동X, 없다면 카드 추가
    if (findSet(boardCards) === null) {
      addBoardCards();
    }
  }, [boardCards, addBoardCards]);

  useEffect(() => {
    // 더이상 세트가 없음
    if (restCards.length === 0 && findSet(boardCards) === null) {
      sendCorrectSetLength();
      changeGameState("end");
    }
  }, [restCards, boardCards, changeGameState]);

  function sendCorrectSetLength() {
    getRestCardLength(restCards, boardCards);
  }

  function removeBoardCards(selectedCards) {
    // 선택한 카드 3장이 세트일 때
    for (const card of selectedCards) {
      setBoardCards((prevCards) =>
        prevCards.filter((prevCard) => prevCard.id !== card.id)
      );
    }
  }

  function addBoardCards() {
    const willAddCards = [restCards[0], restCards[1], restCards[2]];
    for (const card of willAddCards) {
      setRestCards((prevCards) =>
        prevCards.filter((prevCard) => prevCard.id !== card.id)
      );
    }
    setBoardCards((prevCards) => [...prevCards, ...willAddCards]);
  }

  function handleGetHint() {
    setHintId(findSet(boardCards)[0].id);
  }

  function handleHintEmpty() {
    setHintId(null);
  }

  return (
    <StartBox>
      <GameHeader
        changeGameState={changeGameState}
        timeEnd={timeEnd}
        selectValue={selectValue}
        changeGameIdx={changeGameIdx}
        sendCorrectSetLength={sendCorrectSetLength}
        gameState={gameState}
        endTimeRef={endTimeRef}
      />
      <GameBoard
        boardCards={boardCards}
        removeBoardCards={removeBoardCards}
        hintId={hintId}
        handleHintEmpty={handleHintEmpty}
      />
      <GameFooter
        addBoardCards={addBoardCards}
        restCardLength={restCards.length}
        handleGetHint={handleGetHint}
      />
    </StartBox>
  );
}
