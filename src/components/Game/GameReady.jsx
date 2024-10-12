import { useState } from "react";

import styled from "styled-components";

import Button from "../Button/ButtonVariation";
import Select from "../Select/Select";
import Card from "../Card/Card";

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

  .textBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
  }

  .btnWrap {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
  }

  & > button {
    margin-top: 20px;
  }

  .setExampleBox {
    ul {
      gap: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 125px;
        pointer-events: none;
      }
    }
  }
`;

export default function GameReady({
  changeGameState,
  handleChangeSelect,
  selectValues,
  selectValue,
  exampleSetCards,
}) {
  return (
    <ReadyBox>
      <h1>SET</h1>
      <h2>게임 목표</h2>
      <div className="setExampleBox">
        <ul>
          {exampleSetCards.map((data) => (
            <li key={data.id}>
              <Card {...data} />
            </li>
          ))}
        </ul>
      </div>
      <div className="textBox">
        <p>세 장의 카드가 "Set"을 이루는 것을 찾는 것이 목표입니다.</p>
        <p>다음의 조건을 모두 만족해야 합니다.</p>
        <p>각 속성(모양, 색상, 수량)이 모두 같거나 모두 다를 것.</p>
      </div>
      <div className="btnWrap">
        <Select
          handleChangeSelect={handleChangeSelect}
          selectValue={selectValue}
          selectValues={selectValues}
        />
        <Button.ControlState
          onClick={() => {
            changeGameState("start");
          }}
        >
          게임 시작
        </Button.ControlState>
      </div>
    </ReadyBox>
  );
}
