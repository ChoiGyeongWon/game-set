import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

const Time = styled.span`
  background: var(--color-violet);
  color: #fff;
  padding: 10px 15px;
  font-size: 0.875rem;
  min-width: 40px;
  min-height: 40px;
  border-radius: 5px;
`;

export default function Timer({
  selectValue,
  changeGameState,
  timeEnd,
  sendCorrectSetLength,
  endTimeRef,
}) {
  const [totalTimer, setTotalTimer] = useState(selectValue);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTotalTimer((prev) => --prev);
      endTimeRef.current = totalTimer;
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [totalTimer]);

  useEffect(() => {
    if (totalTimer <= 0) {
      timeEnd(totalTimer);
      changeGameState("end");
      sendCorrectSetLength();
    }
  }, [totalTimer]);

  const hours = Math.floor(totalTimer / 3600);
  const minutes = Math.floor((totalTimer % 3600) / 60);
  const seconds = totalTimer % 60;

  return (
    <Time>{`${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`}</Time>
  );
}
