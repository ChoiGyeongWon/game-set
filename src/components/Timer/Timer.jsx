import { useState, useEffect, useRef } from "react";

import styled from "styled-components";

const Time = styled.span``;

export default function Timer({ changeGameState, addIdx }) {
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
    <Time>{`${String(hoursRef.current).padStart(2, "0")}:${String(
      minutseRef.current
    ).padStart(2, "0")}:${String(secondsRef.current).padStart(2, "0")}`}</Time>
  );
}
