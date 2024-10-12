import { useState } from "react";

import styled from "styled-components";

import Button from "../Button/ButtonVariation";

const Footer = styled.header`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function GameFooter({
  addBoardCards,
  restCardLength,
  handleGetHint,
}) {
  const [isHintClickable, setIsHintClickable] = useState(true);

  function onClickHint() {
    setIsHintClickable((prev) => !prev);

    setTimeout(() => {
      setIsHintClickable((prev) => !prev);
    }, 2000);
  }

  return (
    <Footer>
      <Button.ControlState
        onClick={() => {
          handleGetHint();
          onClickHint();
        }}
        disabled={!isHintClickable}
      >
        힌트
      </Button.ControlState>
      <Button.ControlState
        onClick={addBoardCards}
        disabled={restCardLength === 0}
        style={{ pointerEvents: "none" }}
      >
        남은카드 {restCardLength}장
      </Button.ControlState>
    </Footer>
  );
}
