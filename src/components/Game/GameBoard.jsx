import { useEffect, useState } from "react";

import styled from "styled-components";
import Card from "../Card/Card";

import { isSet } from "../../util/set";

const Board = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  padding: var(--size-padding);
  background-color: var(--color-green-1);
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 5px rgba(0, 0, 0);

  & > ul {
    overflow-y: auto;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: repeat(
      auto-fill,
      minmax(calc(100% / 4 - 20px * 3 / 4), auto)
    );
    grid-auto-rows: minmax(calc(100% / 4 - 20px * 3 / 4), auto);
    gap: 20px;

    & > li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function GameBoard({
  boardCards,
  removeBoardCards,
  hintId,
  handleHintEmpty,
}) {
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (selectedCards.length === 3) {
      if (isSet(selectedCards)) {
        // set가 맞다면
        removeBoardCards(selectedCards);
      }

      setSelectedCards((prevCards) => []);
    }
  }, [selectedCards, removeBoardCards]);

  function handleSetSelectedRef(calc, data) {
    // 카드 선택, 삭제
    if (calc === "add") {
      setSelectedCards((prevCards) => [...prevCards, data]);
    } else if (calc === "remove") {
      setSelectedCards((prevCards) =>
        prevCards.filter((obj) => obj.id !== data.id)
      );
    }
  }

  return (
    <Board>
      <ul>
        {boardCards.map((data) => (
          <li key={data.id}>
            <Card
              {...data}
              handleSetSelectedRef={handleSetSelectedRef}
              activeReset={selectedCards.length === 3}
              isHintPop={hintId === data.id}
              handleHintEmpty={handleHintEmpty}
            />
          </li>
        ))}
      </ul>
    </Board>
  );
}
