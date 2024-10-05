import styled from "styled-components";

import Button from "../Button/ButtonVariation";

const Footer = styled.header`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function GameFooter() {
  return (
    <Footer>
      <Button.ControlState>힌트</Button.ControlState>
      <Button.ControlState>카드뽑기</Button.ControlState>
    </Footer>
  );
}
