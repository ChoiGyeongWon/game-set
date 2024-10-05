import styled from "styled-components";

import Button from "../Button/ButtonVariation";

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

export default function GameHeader() {
  return (
    <Header>
      <span>00:00</span>
      <div>
        <Button.ControlState>처음으로</Button.ControlState>
        <Button.RefreshGame>재시작</Button.RefreshGame>
      </div>
    </Header>
  );
}
