import styled from "styled-components";

const StyledSelect = styled.select`
  height: 100%;
  border: none;
  background-color: var(--color-violet);
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23fff" viewBox="0 -960 960 960"><path d="M480-360 280-560h400z"/></svg>');
  background-size: 24px 24px;
  background-position: calc(100% - 7px) center;
  background-repeat: no-repeat;
  color: #fff;
  border-radius: 5px;
  padding: 5px 30px 5px 15px;
  appearance: none;
  width: 85px;
  font-size: 0.875rem;

  option {
    color: #fff;
  }
`;

export default function Select({
  handleChangeSelect,
  selectValues,
  selectValue,
}) {
  return (
    <StyledSelect onChange={handleChangeSelect} value={selectValue}>
      {selectValues.map((option, idx) => (
        <option key={option} value={option}>{`${option / 60}분`}</option>
      ))}
    </StyledSelect>
  );
}
