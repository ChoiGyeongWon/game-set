import styled from "styled-components";

import Button from "../Button/ButtonVariation";

const EndBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100vh;
  gap: 20px;

  .box {
    width: calc(100% - 40px);
    height: 200px;
    padding: var(--size-padding);
    background-color: var(--color-violet);
    border-radius: var(--border-radius);
    box-shadow: 0px 0px 5px rgba(0, 0, 0);
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      color: #fff;
      font-weight: 500;
    }

    table {
      table-layout: fixed;
      width: 100%;
      color: #fff;

      thead {
        th {
          color: #fff;
          text-align: center;
          font-weight: 500;
          padding: 5px;
        }
      }
      tbody {
        td {
          color: #fff;
          text-align: center;
          padding: 5px;
        }
      }
    }
  }
`;

export default function GameEnd({
  changeGameState,
  endTime,
  restCardLength,
  allCardLength,
}) {
  const hours = Math.floor(endTime / 3600);
  const minutes = Math.floor((endTime % 3600) / 60);
  const seconds = endTime % 60;
  const allSets = allCardLength / 3;
  const correctSets = allSets - restCardLength / 3;

  return (
    <EndBox>
      <div className="box">
        <h1>결과</h1>
        <table>
          <colgroup>
            <col width="50%" />
            <col width="50%" />
          </colgroup>
          <thead>
            <tr>
              <th>클리어 타임</th>
              <th>맞힌 세트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`${String(hours).padStart(2, "0")}:${String(
                minutes
              ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</td>
              <td>{correctSets} / {allSets}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button.RefreshGame
        onClick={() => {
          changeGameState("start");
        }}
      >
        재시작
      </Button.RefreshGame>
    </EndBox>
  );
}
