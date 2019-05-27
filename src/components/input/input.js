import PropTypes from "prop-types";
import styled from "styled-components";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.js

const Input = styled.input.attrs(({ isMultiline }) => ({ as: isMultiline ? "textarea" : undefined }))`
  box-sizing: border-box;
  padding: 18px;
  border: 0;
  font-family: "Montserrat-Regular";
  font-size: 18px;
  box-shadow: none;
  color: ${({ theme }) => theme.fontColor}
  
  &:focus {
    outline: 0;
  }
`;

Input.defaultProps = {
  isMultiline: false
};

Input.propTypes = {
  isMultiline: PropTypes.bool
};

export default Input;
