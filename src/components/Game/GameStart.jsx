import styled from "styled-components";

import GameHeader from "./GameHeader";
import GameBoard from "./GameBoard";
import GameFooter from "./GameFooter";

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

export default function GameStart() {
  return (
    <StartBox>
      <GameHeader />
      <GameBoard />
      <GameFooter />
    </StartBox>
  );
}
