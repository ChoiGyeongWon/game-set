import { useState, useEffect, useRef } from "react";

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

export default function GameHeader({ changeGameState, addIdx }) {
  const [totalTimer, setTotalTimer] = useState(0);
  const intervalRef = useRef();
  const hoursRef = useRef(Math.floor(totalTimer / 3600));
  const minutseRef = useRef(Math.floor((totalTimer % 3600) / 60));
  const secondsRef = useRef(totalTimer % 60);
  hoursRef.current = Math.floor(totalTimer / 3600);
  minutseRef.current = Math.floor((totalTimer % 3600) / 60);
  secondsRef.current = totalTimer % 60;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTotalTimer((prev) => ++prev);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Header>
      <Timer />
      <div>
        <Button.ControlState onClick={() => changeGameState("end")}>
          끝으로
        </Button.ControlState>
        <Button.ControlState onClick={() => changeGameState("ready")}>
          처음으로
        </Button.ControlState>
        <Button.RefreshGame
          onClick={() => {
            addIdx();
          }}
        >
          재시작
        </Button.RefreshGame>
      </div>
    </Header>
  );
}
