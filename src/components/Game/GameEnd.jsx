import styled from "styled-components";

import Button from "../Button/ButtonVariation";

const EndBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100vh;
  gap: 20px;
`;

export default function GameEnd({ changeGameState }) {
  return (
    <EndBox>
      <span>클리어시간 = 00:00:00</span>
      <span>맞힌 세트 = 0 / 81</span>
      <Button.RefreshGame onClick={() => {changeGameState("start")}}>재시작</Button.RefreshGame>
    </EndBox>
  );
}
