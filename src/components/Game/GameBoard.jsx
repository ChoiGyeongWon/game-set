import styled from "styled-components";

import Card from "../Card/Card";

const Board = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--size-padding);
  background-color: var(--color-green-1);
  border-radius: var(--border-radius);

  & > ul {
    overflow-y: auto;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: repeat(
      auto-fill,
      minmax(calc(100% / 3 - 20px * 2 / 3), auto)
    );
    grid-auto-rows: minmax(calc(100% / 3 - 20px * 2 / 3), auto);
    gap: 20px;
  }
`;

export default function GameBoard() {
  return (
    <Board>
      <ul>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </Board>
  );
}
