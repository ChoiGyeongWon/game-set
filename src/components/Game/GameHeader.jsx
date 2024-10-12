import styled from "styled-components";

import Button from "../Button/ButtonVariation";
import Timer from "../Timer/Timer";

const Header = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export default function GameHeader({
  changeGameState,
  timeEnd,
  selectValue,
  changeGameIdx,
  sendCorrectSetLength,
  gameState,
  endTimeRef
}) {
  return (
    <Header>
      <Timer
        selectValue={selectValue}
        changeGameState={changeGameState}
        timeEnd={timeEnd}
        sendCorrectSetLength={sendCorrectSetLength}
        gameState={gameState}
        endTimeRef={endTimeRef}
      />
      <div>
        <Button.ControlState onClick={() => changeGameState("ready")}>
          처음으로
        </Button.ControlState>
        <Button.RefreshGame
          onClick={() => {
            changeGameIdx();
          }}
        >
          재시작
        </Button.RefreshGame>
      </div>
    </Header>
  );
}
