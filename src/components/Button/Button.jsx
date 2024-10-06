import styled from "styled-components";

import iconRefresh from "../../assets/images/icon-refresh.svg";
import iconReplay from "../../assets/images/icon-replay.svg";

const ButtonDefault = styled.button.attrs((props) => props)`
  background-color: var(--color-violet);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius);
  padding: 10px 15px;
  cursor: pointer;
  font-size: 0.875rem;
  min-width: 40px;
  min-height: 40px;

  &.gameRefresh {
    padding: 0px;
    border-radius: var(--border-radius);
    background-image: url(${iconRefresh});
    background-size: 27px auto;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &.gameReset {
    padding: 0px;
    border-radius: var(--border-radius);
    background-image: url(${iconReplay});
    background-size: 27px auto;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default function Button({ children, ...props }) {
  return (
    <ButtonDefault type="button" {...props}>
      {children}
    </ButtonDefault>
  );
}
