import styled from "styled-components";

const GameRootBox = styled.main`
  background-color: #f5fbef;
`;

export default function GameRoot({ children }) {
  return <GameRootBox>{children}</GameRootBox>;
}
