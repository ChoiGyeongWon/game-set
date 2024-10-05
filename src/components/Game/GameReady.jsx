import styled from "styled-components";

import Button from "../Button/ButtonVariation";

const ReadyBox = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--size-padding);
  gap: 10px;

  & > h1 {
    font-weight: var(--font-weight-bold);
    font-size: 4rem;
  }

  & > h2 {
    font-weight: var(--font-weight-medium);
    font-size: 2rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  & > button {
    margin-top: 20px;
  }
`;

export default function GameReady({ changeGameState }) {
  return (
    <ReadyBox>
      <h1>SET</h1>
      <h2>게임 목표</h2>
      <div>
        <p>세 장의 카드가 "Set"을 이루는 것을 찾는 것이 목표입니다.</p>
        <p>다음의 조건을 모두 만족해야 합니다.</p>
        <p>각 속성(모양, 색상, 수량)이 모두 같거나 모두 다를 것.</p>
      </div>
      <Button.ControlState
        onClick={() => {
          changeGameState("start");
        }}
      >
        게임 시작
      </Button.ControlState>
    </ReadyBox>
  );
}
