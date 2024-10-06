import styled from "styled-components";

import Button from "../Button/ButtonVariation";

const Footer = styled.header`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function GameFooter({ addBoardCards, restCardLength, handleGetHint }) {
  return (
    <Footer>
      <Button.ControlState onClick={handleGetHint}>힌트</Button.ControlState>
      <Button.ControlState
        onClick={addBoardCards}
        disabled={restCardLength === 0}
      >
        카드뽑기 {restCardLength}장
      </Button.ControlState>
    </Footer>
  );
}
