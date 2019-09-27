import styled from "styled-components";

const DropdownSelector = styled.select`
  font-family: "Montserrat-Regular";
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  padding: 18px;
  color: ${({ theme }) => theme.fontColor};
  width: 100%;
  height: 100%;
  border-width: 0px;
  appearence: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export default DropdownSelector;
